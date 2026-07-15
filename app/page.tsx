"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

const sectors = ["B2B Industrial", "D2C Consumer", "Financial Services"];

export default function Home() {
  const [companyName, setCompanyName] = useState("");
  const [sector, setSector] = useState(sectors[0]);
  const [peers, setPeers] = useState("");
  const [context, setContext] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [htmlReport, setHtmlReport] = useState("");
  const [error, setError] = useState("");
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const reportReady = useMemo(() => Boolean(htmlReport), [htmlReport]);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const interval = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 95) {
          return 95;
        }

        const nextValue = current + Math.max(0.5, (95 - current) * 0.04);
        return Math.min(nextValue, 95);
      });
    }, 2000);

    return () => window.clearInterval(interval);
  }, [isLoading]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setIsStreaming(false);
    setError("");
    setHtmlReport("");
    setProgress(0);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName,
          sector,
          peers,
          context,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Unable to generate the report.");
      }

      if (!response.body) {
        throw new Error("No response stream available.");
      }

      setIsStreaming(true);
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamedHtml = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        streamedHtml += chunk;
        setHtmlReport(streamedHtml);
      }

      const trailingChunk = decoder.decode();
      if (trailingChunk) {
        streamedHtml += trailingChunk;
        setHtmlReport(streamedHtml);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to generate the report.");
    } finally {
      setProgress(100);
      setIsLoading(false);
      setIsStreaming(false);
    }
  }

  function handleDownload() {
    if (!htmlReport) return;

    const blob = new Blob([htmlReport], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${companyName || "report"}.html`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-300">
            ACCENTURE SONG
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Agentic Commerce
            <br />
            Readiness
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
            Powered by Claude · Accenture Song · 2026
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="companyName">
                Company Name
              </label>
              <input
                id="companyName"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none ring-0"
                placeholder="Contoso Commerce"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="sector">
                Sector
              </label>
              <select
                id="sector"
                value={sector}
                onChange={(event) => setSector(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none ring-0"
              >
                {sectors.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="peers">
                Peer Benchmarks (comma-separated)
              </label>
              <input
                id="peers"
                value={peers}
                onChange={(event) => setPeers(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none ring-0"
                placeholder="Example Corp, Northwind, Fabric Labs"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="context">
                Additional Context (optional)
              </label>
              <textarea
                id="context"
                value={context}
                onChange={(event) => setContext(event.target.value)}
                className="min-h-32 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none ring-0"
                placeholder="Add any strategic context, initiatives, or constraints."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? "Generating report..." : "Generate Report"}
            </button>

            {isStreaming ? (
              <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 p-3 shadow-inner">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-fuchsia-950/60">
                    <div className="h-full w-3/4 animate-pulse rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500" />
                  </div>
                </div>
                <p className="mt-2 text-sm font-semibold text-fuchsia-100">
                  Researching & generating your report...
                </p>
                <p className="mt-1 text-xs text-fuchsia-300/80">
                  Claude is searching the web and scoring each criterion. This takes 3–5 minutes.
                </p>
              </div>
            ) : null}
            {error ? <p className="text-sm text-rose-300">{error}</p> : null}
          </form>

          <div className="flex min-h-[640px] flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-3 shadow-2xl backdrop-blur">
            {reportReady ? (
              <>
                <div className="mb-3 flex items-center justify-between px-2 py-1">
                  <p className="text-sm font-medium text-slate-200">Generated report preview</p>
                  {!isStreaming ? (
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/20"
                    >
                      Download Report
                    </button>
                  ) : null}
                </div>
                <iframe
                  ref={iframeRef}
                  title="Generated report"
                  className="h-full min-h-[560px] w-full rounded-2xl border border-white/10 bg-white"
                  srcDoc={htmlReport}
                />
              </>
            ) : (
              <div className="flex h-full min-h-[560px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-slate-950/40 p-6 text-center text-sm leading-7 text-slate-400">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center gap-6 p-8">
                    <div className="w-full max-w-sm">
                      <div className="h-2 overflow-hidden rounded-full bg-gray-700">
                        <div
                          className="h-full animate-pulse rounded-full bg-gradient-to-r from-purple-600 to-purple-400"
                          style={{ width: `${Math.min(progress, 95)}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">
                        Researching & generating your report...
                      </p>
                      <p className="mt-2 text-sm text-gray-400">
                        Claude is searching the web and scoring each criterion.
                        <br />
                        This takes 3–5 minutes.
                      </p>
                    </div>
                  </div>
                ) : (
                  "Your generated report will appear here once the request completes."
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowInfoModal(true)}
        className="fixed bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-fuchsia-400/30 bg-fuchsia-600/90 text-lg font-semibold text-white shadow-lg shadow-fuchsia-950/40 backdrop-blur transition hover:scale-105 hover:bg-fuchsia-500"
        aria-label="Show author information"
      >
        ⓘ
      </button>

      {showInfoModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur"
          onClick={() => setShowInfoModal(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-black/50"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-300">
                  About this tool
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-fuchsia-200">
                  Agentic Commerce Readiness Tool
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowInfoModal(false)}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close author information"
              >
                ×
              </button>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-slate-100">Version:</span> 0.5
              </p>
              <p>
                <span className="font-semibold text-slate-100">Created:</span> July 2026
              </p>
              <p>
                <span className="font-semibold text-slate-100">Concept:</span> Jan Wind
              </p>
              <p>
                <span className="font-semibold text-slate-100">Online Setup:</span> Stefan Konopatzki
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
