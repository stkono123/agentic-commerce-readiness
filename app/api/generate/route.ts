import { NextRequest, NextResponse } from "next/server";
import {
  REPORT_TEMPLATE,
  SKILL_B2B,
  SKILL_D2C,
  SKILL_FS,
  SKILL_RENDER,
} from "./skills";

const SECTOR_SKILL_CONTENT: Record<string, string> = {
  "B2B Industrial": SKILL_B2B,
  "D2C Consumer": SKILL_D2C,
  "Financial Services": SKILL_FS,
};

const FINAL_INSTRUCTION =
  "Return ONLY the raw HTML report. No markdown, no code fences, no explanation whatsoever.";
const WEB_SEARCH_INSTRUCTION =
  "Before scoring each criterion, search the web for current, factual information about the company and its peers. Use search queries like \"[company name] [specific feature]\" to find real evidence. Only score based on verified findings. Always mention what you found (or did not find) as evidence in the criterion description field.";

export const maxDuration = 300;

function buildSystemPrompt(sector: string) {
  const sectorSkillContent = SECTOR_SKILL_CONTENT[sector] ?? "";

  return [
    sectorSkillContent,
    SKILL_RENDER,
    REPORT_TEMPLATE,
    FINAL_INSTRUCTION,
    WEB_SEARCH_INSTRUCTION,
  ]
    .filter(Boolean)
    .join("\n\n");
}

function extractTextFromSseEvent(eventChunk: string) {
  const lines = eventChunk.split("\n");
  let text = "";

  for (const line of lines) {
    if (!line.startsWith("data:")) {
      continue;
    }

    const data = line.slice(5).trim();

    if (!data || data === "[DONE]") {
      continue;
    }

    try {
      const parsed = JSON.parse(data);
      const deltaText =
        typeof parsed?.delta?.text === "string"
          ? parsed.delta.text
          : "";

      if (deltaText) {
        text += deltaText;
      }
    } catch {
      // Ignore malformed SSE payloads.
    }
  }

  return text;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY is not configured." },
      { status: 500 }
    );
  }

  try {
    const payload = await request.json();
    const companyName = String(payload?.companyName ?? "");
    const sector = String(payload?.sector ?? "");
    const peers = String(payload?.peers ?? "");
    const context = String(payload?.context ?? "");

    const today = new Date().toLocaleDateString("en-GB", {
      month: "long",
      year: "numeric",
    });
    const systemPrompt = await buildSystemPrompt(sector);
    const userMessage = `Date: ${today}\nCompany: ${companyName}\nSector: ${sector}\nPeers: ${peers}\nAdditional Context: ${context}\n\nGenerate the full Agentic Commerce Readiness Report as a single self-contained HTML file.`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 32000,
        stream: true,
        tools: [
          {
            type: "web_search_20250305",
            name: "web_search",
          },
        ],
        system: systemPrompt,
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    if (!response.ok || !response.body) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          error: errorText || "Anthropic API request failed.",
        },
        { status: response.status }
      );
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        if (!reader) {
          controller.close();
          return;
        }

        try {
          while (true) {
            const { done, value } = await reader.read();

            if (done) {
              break;
            }

            buffer += decoder.decode(value, { stream: true });
            const events = buffer.split("\n\n");
            buffer = events.pop() ?? "";

            for (const event of events) {
              const textChunk = extractTextFromSseEvent(event);

              if (textChunk) {
                controller.enqueue(encoder.encode(textChunk));
              }
            }
          }

          buffer += decoder.decode();
          const trailingEvents = buffer.split("\n\n");

          for (const event of trailingEvents) {
            const textChunk = extractTextFromSseEvent(event);

            if (textChunk) {
              controller.enqueue(encoder.encode(textChunk));
            }
          }
        } catch (error) {
          console.error("Streaming report generation failed", error);
          controller.error(error);
        } finally {
          reader.releaseLock();
          controller.close();
        }
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Report generation failed", error);
    return NextResponse.json(
      { error: "Unable to generate the report right now." },
      { status: 500 }
    );
  }
}
