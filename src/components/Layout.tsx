import type React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, site } from "../data/site";
import { openConsult } from "../lib/consult";
import { ChatGlyph } from "./ui";

const Wordmark: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <Link to="/" aria-label="고릴라티켓 홈으로" className="group flex items-center gap-3">
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
        light ? "border-ivory/30 text-ivory" : "border-forest/25 text-forest"
      }`}
      aria-hidden="true"
    >
      <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
        <path
          d="M2.6 6.4c0-1 .8-1.8 1.8-1.8h11.2c1 0 1.8.8 1.8 1.8v1.5a2.3 2.3 0 0 0 0 4.2v1.5c0 1-.8 1.8-1.8 1.8H4.4c-1 0-1.8-.8-1.8-1.8v-1.5a2.3 2.3 0 0 0 0-4.2V6.4Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path d="M12.4 6.6v6.8" stroke="currentColor" strokeWidth="1.1" strokeDasharray="1.5 2" />
      </svg>
    </span>
    <span className="leading-none">
      <span
        className={`block font-display text-[1.32rem] tracking-[-0.01em] ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        고릴라티켓
      </span>
      <span
        className={`mt-1 block text-[9px] uppercase tracking-[0.26em] ${
          light ? "text-ivory/45" : "text-ink-muted"
        }`}
      >
        Gorilla Ticket
      </span>
    </span>
  </Link>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      setShowTop(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to.split("/").slice(0, 2).join("/"));

  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
      >
        본문으로 바로가기
      </a>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-line/90 bg-ivory/92 backdrop-blur-md"
            : "border-b border-transparent bg-ivory"
        }`}
      >
        <div className="wrap flex h-[74px] items-center justify-between">
          <Wordmark />

          <nav aria-label="주 메뉴" className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  to={item.to}
                  className={`relative py-2 text-[13.5px] tracking-wide transition-colors ${
                    isActive(item.to) ? "text-forest" : "text-ink-soft hover:text-forest"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-px bg-brass transition-all duration-300 ${
                      isActive(item.to) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
                {item.children && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[300px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-line bg-ivory-light shadow-[0_28px_60px_-40px_rgba(20,24,27,0.55)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block border-b border-line/70 px-5 py-4 transition-colors last:border-b-0 hover:bg-ivory"
                        >
                          <span className="block text-[13.5px] font-medium text-ink">{child.label}</span>
                          <span className="mt-1 block text-[11.5px] leading-relaxed text-ink-muted">
                            {child.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={site.phoneHref}
              className="text-[13px] tracking-wide text-ink-muted transition-colors hover:text-forest"
            >
              {site.phone}
            </a>
            <button type="button" onClick={openConsult} className="btn-primary !px-5 !py-2.5 text-[13px]">
              <ChatGlyph className="h-3.5 w-3.5" />
              1:1 상담
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">메뉴</span>
            <span aria-hidden="true" className="flex w-[18px] flex-col gap-[5px]">
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span className={`h-px w-full bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[74px] z-30 overflow-y-auto border-t border-line bg-ivory lg:hidden"
        >
          <div className="wrap py-8">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-line/80 py-1">
                {item.children ? (
                  <>
                    <p className="pt-4 pb-2 font-display text-[1.05rem] text-ink">{item.label}</p>
                    <div className="pb-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block py-2.5 pl-1 text-[14px] text-ink-soft"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={item.to} className="block py-4 font-display text-[1.05rem] text-ink">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <button type="button" onClick={openConsult} className="btn-primary w-full">
                <ChatGlyph />
                채널톡 1:1 상담
              </button>
              <a href={site.phoneHref} className="btn-outline w-full">
                전화 {site.phone}
              </a>
              <p className="mt-2 text-center text-xs text-ink-muted">
                {site.hoursNote} · {site.hours}
              </p>
            </div>
          </div>
        </div>
      )}

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="bg-forest-deep text-ivory">
        <div className="wrap py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
            <div>
              <Wordmark light />
              <p className="mt-6 max-w-xs text-[13px] leading-[1.9] text-ivory/55">
                공연과 전시, 상품권과 바우처까지. 무엇을 준비해야 할지 막막할 때
                가장 먼저 확인할 곳, 고릴라티켓입니다.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-brass-light">서비스</h3>
              <ul className="mt-5 space-y-3 text-[13px] text-ivory/60">
                <li>
                  <Link to="/services/ticket" className="transition-colors hover:text-ivory">
                    티켓 컨시어지
                  </Link>
                </li>
                <li>
                  <Link to="/services/voucher" className="transition-colors hover:text-ivory">
                    상품권 · 바우처
                  </Link>
                </li>
                <li>
                  <Link to="/services/business" className="transition-colors hover:text-ivory">
                    기업 · 단체 의뢰
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-brass-light">안내</h3>
              <ul className="mt-5 space-y-3 text-[13px] text-ivory/60">
                <li>
                  <Link to="/how-to-use" className="transition-colors hover:text-ivory">
                    이용 절차
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="transition-colors hover:text-ivory">
                    자주 묻는 질문
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="transition-colors hover:text-ivory">
                    이야기
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="transition-colors hover:text-ivory">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="transition-colors hover:text-ivory">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-brass-light">상담</h3>
              <div className="mt-5 space-y-3 text-[13px] text-ivory/60">
                <p>
                  <a href={site.phoneHref} className="transition-colors hover:text-ivory">
                    {site.phone}
                  </a>
                </p>
                <button
                  type="button"
                  onClick={openConsult}
                  className="inline-flex items-center gap-2 text-left transition-colors hover:text-ivory"
                >
                  <ChatGlyph className="h-3.5 w-3.5" />
                  채널톡 1:1 상담
                </button>
                <p className="text-ivory/40">{site.hours}</p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-[11.5px] leading-relaxed text-ivory/35 md:flex-row md:items-start md:justify-between">
            <p className="max-w-2xl">
              고릴라티켓은 티켓·상품권·바우처 준비를 돕는 안내 사이트입니다. 실제 예매,
              발권, 구매 조건은 각 판매처의 약관과 정책을 따릅니다.
            </p>
            <p className="shrink-0">© {site.year} {site.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 우측 하단 상담 · 맨 위로 */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5 md:bottom-7 md:right-7">
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ivory-light/90 text-ink-soft shadow-sm backdrop-blur transition-colors hover:border-brass hover:text-forest"
            aria-label="맨 위로"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 12V2M3 6l4-4 4 4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        )}
        <button
          type="button"
          onClick={openConsult}
          className="group flex items-center gap-2 rounded-full bg-forest py-3 pl-4 pr-5 text-ivory shadow-[0_16px_40px_-18px_rgba(11,35,30,0.85)] ring-1 ring-brass/40 transition-all duration-300 hover:bg-forest-deep"
          aria-label="채널톡 1:1 상담 열기"
        >
          <ChatGlyph className="h-4 w-4" />
          <span className="text-[12.5px] tracking-wide">1:1 상담</span>
        </button>
      </div>
    </div>
  );
};

export default Layout;
