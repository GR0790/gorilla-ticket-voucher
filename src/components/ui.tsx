import { useState } from "react";
import type React from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { openConsult } from "../lib/consult";

/* ─────────── 섹션 헤딩 ─────────── */
export const SectionHead: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
}> = ({ eyebrow, title, lead, align = "left", light = false }) => (
  <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
    {eyebrow && (
      <p className={`eyebrow mb-4 ${light ? "text-brass-light" : ""}`}>{eyebrow}</p>
    )}
    <h2 className={`display-section ${light ? "text-ivory" : "text-ink"}`}>{title}</h2>
    {lead && (
      <p className={`lead mt-5 ${light ? "text-ivory/70" : ""}`}>{lead}</p>
    )}
  </div>
);

/* ─────────── 화살표 링크 ─────────── */
export const ArrowLink: React.FC<{
  to: string;
  children: React.ReactNode;
  className?: string;
}> = ({ to, children, className = "" }) => (
  <Link
    to={to}
    className={`group inline-flex items-center gap-2 text-sm font-medium text-forest transition-colors hover:text-brass ${className}`}
  >
    {children}
    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
);

/* ─────────── 채널톡 버튼 ─────────── */
export const ConsultButton: React.FC<{
  label?: string;
  variant?: "primary" | "outline" | "light" | "ghostLight";
  className?: string;
}> = ({ label = "채널톡 1:1 상담", variant = "primary", className = "" }) => {
  const styles = {
    primary: "btn-primary",
    outline: "btn-outline",
    light: "btn-light",
    ghostLight: "btn-ghost-light",
  }[variant];
  return (
    <button type="button" onClick={openConsult} className={`${styles} ${className}`}>
      <ChatGlyph />
      {label}
    </button>
  );
};

export const ChatGlyph: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20.5 11.6c0 4.2-3.8 7.6-8.5 7.6-.9 0-1.8-.1-2.6-.4L5 20.5l1.1-3.3C4.8 15.9 3.5 13.9 3.5 11.6c0-4.2 3.8-7.6 8.5-7.6s8.5 3.4 8.5 7.6Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <circle cx="8.8" cy="11.6" r="0.9" fill="currentColor" />
    <circle cx="12" cy="11.6" r="0.9" fill="currentColor" />
    <circle cx="15.2" cy="11.6" r="0.9" fill="currentColor" />
  </svg>
);

/* ─────────── 내부 페이지 히어로 ─────────── */
export const PageHero: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  crumbs?: { label: string; to?: string }[];
}> = ({ eyebrow, title, lead, crumbs }) => (
  <section className="border-b border-line bg-ivory-light">
    <div className="wrap pb-14 pt-10 md:pb-20 md:pt-16">
      {crumbs && (
        <nav aria-label="현재 위치" className="mb-10 flex flex-wrap items-center gap-2 text-[12px] text-ink-muted">
          <Link to="/" className="hover:text-forest">
            홈
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span className="text-line">/</span>
              {c.to ? (
                <Link to={c.to} className="hover:text-forest">
                  {c.label}
                </Link>
              ) : (
                <span className="text-ink-soft">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h1 className="display-hero max-w-4xl text-balance text-ink">{title}</h1>
      {lead && <p className="lead mt-7 max-w-2xl">{lead}</p>}
    </div>
  </section>
);

/* ─────────── 아코디언 ─────────── */
export const Accordion: React.FC<{
  items: { q: string; a: React.ReactNode }[];
  defaultOpen?: number;
}> = ({ items, defaultOpen = -1 }) => {
  const [open, setOpen] = useState<number>(defaultOpen);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-forest"
            >
              <span className="flex gap-4">
                <span className="mt-1 font-display text-xs text-brass">Q</span>
                <span className="font-display text-[1.02rem] leading-relaxed text-ink md:text-[1.1rem]">
                  {item.q}
                </span>
              </span>
              <span
                aria-hidden="true"
                className={`mt-1 shrink-0 text-brass transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-7 pl-8 pr-2 text-[0.95rem] leading-[1.9] text-ink-soft md:pl-9">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ─────────── 하단 상담 배너 ─────────── */
export const CTABand: React.FC<{
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
}> = ({
  eyebrow = "Consultation",
  title = (
    <>
      어떤 티켓인지, 몇 장인지
      <br className="hidden sm:block" /> 알려주시면 나머지는 저희가 확인합니다.
    </>
  ),
  body = "채널톡으로 문의를 남겨주시면 담당자가 조건과 가능 여부를 확인해 안내드립니다. 상담은 무료입니다.",
}) => (
  <section className="relative overflow-hidden bg-forest-deep">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full opacity-40"
      style={{ background: "radial-gradient(circle, rgba(217,190,138,0.28) 0%, rgba(11,35,30,0) 68%)" }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent"
    />
    <div className="wrap relative py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="eyebrow text-brass-light">{eyebrow}</p>
        <h2 className="display-section mt-5 text-ivory">{title}</h2>
        <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.9] text-ivory/65">{body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ConsultButton variant="light" label="채널톡 1:1 상담 시작" />
          <a href={site.phoneHref} className="btn-ghost-light">
            전화 {site.phone}
          </a>
        </div>
        <p className="mt-6 text-xs tracking-wide text-ivory/40">
          {site.hoursNote} · {site.hours}
        </p>
      </div>
    </div>
  </section>
);
