"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, BookOpen, Download, FileText, Search, X } from "lucide-react";
import {
  filterSearchItems,
  type SearchIndexItem,
  type SearchIndexKind,
} from "@/lib/search-index";

interface HeaderSearchModalProps {
  open: boolean;
  items: SearchIndexItem[];
  onClose: () => void;
}

const FILTER_TABS: Array<{ id: "all" | SearchIndexKind; label: string }> = [
  { id: "all", label: "All" },
  { id: "blog", label: "Blog" },
  { id: "resource", label: "Resources" },
];

export function HeaderSearchModal({ open, items, onClose }: HeaderSearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeKind, setActiveKind] = useState<"all" | SearchIndexKind>("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(
    () => filterSearchItems(items, query, activeKind),
    [items, query, activeKind]
  );

  const counts = useMemo(
    () => ({
      all: filterSearchItems(items, query, "all").length,
      blog: filterSearchItems(items, query, "blog").length,
      resource: filterSearchItems(items, query, "resource").length,
    }),
    [items, query]
  );

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveKind("all");
      setActiveIndex(0);
      return;
    }

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 10);

    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, activeKind]);

  if (!open) return null;

  const handleSelectItem = (item: SearchIndexItem) => {
    onClose();
    if (item.isDownload) {
      const link = document.createElement("a");
      link.href = item.href;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    router.push(item.href);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (results.length > 0) {
        setActiveIndex((prev) => (prev + 1) % results.length);
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (results.length > 0) {
        setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
      }
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      handleSelectItem(results[activeIndex]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-70 flex items-start justify-center bg-slate-950/60 px-4 pt-20 backdrop-blur-sm sm:pt-24"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search blog posts and resources"
        onClick={(event) => event.stopPropagation()}
        className="border-outline/30 bg-surface w-full max-w-2xl overflow-hidden rounded-2xl border shadow-2xl"
      >
        {/* Search Input Row */}
        <div className="border-outline/20 flex items-center gap-3 border-b px-4 py-3.5">
          <Search className="text-cta h-5 w-5 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search blog articles, architecture guides, and whitepapers..."
            aria-label="Search blog posts and resources"
            className="text-on-background placeholder:text-on-surface-variant/70 w-full bg-transparent text-sm outline-none sm:text-base"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              aria-label="Clear search query"
              className="text-on-surface-variant hover:bg-surface-container hover:text-on-background rounded-md p-1 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="border-outline/30 text-on-surface-variant hover:bg-surface-container hover:text-on-background rounded-md border px-2 py-1 text-[11px] font-semibold transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="border-outline/20 bg-surface-container/40 flex items-center justify-between gap-2 border-b px-4 py-2.5">
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Filter search results">
            {FILTER_TABS.map((tab) => {
              const selected = activeKind === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveKind(tab.id)}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                    selected
                      ? "bg-cta text-on-cta"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-on-background"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="opacity-80 tabular-nums">{counts[tab.id]}</span>
                </button>
              );
            })}
          </div>
          <span className="text-on-surface-variant hidden text-[11px] sm:inline">
            ↑↓ to navigate · ↵ to open
          </span>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="px-4 py-12 text-center">
              <p className="text-on-background text-sm font-semibold">
                No matching posts or resources found
              </p>
              <p className="text-on-surface-variant mt-1 text-xs">
                Try keywords like &ldquo;architecture&rdquo;, &ldquo;n8n&rdquo;,
                &ldquo;PostgreSQL&rdquo;, or &ldquo;monitoring&rdquo;.
              </p>
            </div>
          ) : (
            <ul className="space-y-1" role="listbox" aria-label="Search results">
              {results.map((item, idx) => {
                const isHighlighted = idx === activeIndex;
                const Icon =
                  item.kind === "blog" ? BookOpen : item.isDownload ? Download : FileText;

                const content = (
                  <div className="flex items-start gap-3">
                    <div className="bg-cta/10 text-cta mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-on-background truncate text-sm font-semibold">
                          {item.title}
                        </span>
                        <span className="bg-surface-container text-on-surface-variant rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase">
                          {item.type}
                        </span>
                        <span className="text-cta text-[11px] font-medium">{item.category}</span>
                      </div>
                      <p className="text-on-surface-variant mt-1 line-clamp-2 text-xs leading-relaxed">
                        {item.description}
                      </p>
                      {item.meta && (
                        <p className="text-on-surface-variant/80 mt-1 text-[11px] font-medium">
                          {item.meta}
                        </p>
                      )}
                    </div>
                    <ArrowUpRight
                      className="text-on-surface-variant mt-1 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                );

                return (
                  <li key={item.id} role="option" aria-selected={isHighlighted}>
                    {item.isDownload ? (
                      <a
                        href={item.href}
                        download
                        onClick={onClose}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`block rounded-xl p-3 transition-colors ${
                          isHighlighted
                            ? "bg-surface-container"
                            : "hover:bg-surface-container/70"
                        }`}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`block rounded-xl p-3 transition-colors ${
                          isHighlighted
                            ? "bg-surface-container"
                            : "hover:bg-surface-container/70"
                        }`}
                      >
                        {content}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
