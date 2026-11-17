import { useMemo, useState } from "react";
import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { CTABand, PageHero } from "../components/ui";
import { blogPosts } from "../data/blogPosts";

const posts = [...blogPosts].sort((a, b) => (a.fields.date < b.fields.date ? 1 : -1));

const Blog: React.FC = () => {
  const categories = useMemo(
    () => ["전체", ...Array.from(new Set(posts.map((p) => p.fields.category)))],
    [],
  );
  const [active, setActive] = useState("전체");

  const featured = posts[0];
  const list = posts.slice(1);
  const filtered = active === "전체" ? list : list.filter((p) => p.fields.category === active);

  return (
    <>
      <SEO
        title="이야기 — 티켓·상품권을 고르는 기준"
        description="좌석 등급 읽는 법, 상품권 유효기간, 단체 관람 준비, 전시 시간 지정제까지. 고릴라티켓이 정리한 티켓과 상품권에 관한 이야기입니다."
        keywords="좌석 등급,상품권 유효기간,단체 관람 준비,전시 관람권,티켓 가이드"
      />
      <PageHero
        eyebrow="Journal"
        crumbs={[{ label: "이야기" }]}
        title={
          <>
            고르는 기준을
            <br />
            조금 더 정확하게.
          </>
        }
        lead="티켓과 상품권을 준비할 때 실제로 부딪히는 문제들을 정리했습니다. 상담 전에 읽어두면 도움이 됩니다."
      />

      {/* 대표 글 */}
      <section className="border-b border-line bg-ivory">
        <div className="wrap py-16 md:py-20">
          <Link to={`/blog/${featured.fields.id}`} className="group grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="flex flex-col justify-between border-line lg:border-r lg:pr-16">
              <div>
                <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.18em] text-ink-muted">
                  <span className="rounded-full border border-brass/40 px-3 py-1 text-brass">Featured</span>
                  <span>{featured.fields.category}</span>
                </div>
                <h2 className="mt-7 font-display text-[1.7rem] leading-[1.45] text-ink transition-colors group-hover:text-forest md:text-[2.1rem]">
                  {featured.fields.title}
                </h2>
              </div>
              <div className="mt-8 flex items-center gap-4 text-[12px] text-ink-muted">
                <span>{featured.fields.date}</span>
                <span className="h-3 w-px bg-line" />
                <span>{featured.fields.readTime} 읽기</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[14px] leading-[2] text-ink-soft">{featured.fields.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-[13px] text-forest">
                글 읽기
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 목록 */}
      <section className="border-b border-line bg-ivory-light">
        <div className="wrap py-16 md:py-24">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-[12.5px] transition-colors ${
                  active === c
                    ? "border-forest bg-forest text-ivory"
                    : "border-line text-ink-soft hover:border-brass hover:text-forest"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 border-t border-line">
            {filtered.map((p, i) => (
              <Link
                key={p.fields.id}
                to={`/blog/${p.fields.id}`}
                className="group grid gap-3 border-b border-line py-8 transition-colors hover:bg-ivory md:grid-cols-[70px_1fr_260px] md:items-baseline md:gap-8"
              >
                <span className="font-display text-[11px] tracking-[0.18em] text-ink-muted">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[10.5px] uppercase tracking-[0.16em] text-brass">{p.fields.category}</p>
                  <h3 className="mt-2 font-display text-[1.2rem] leading-[1.5] text-ink transition-colors group-hover:text-forest">
                    {p.fields.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[13px] leading-[1.85] text-ink-soft md:hidden">
                    {p.fields.excerpt}
                  </p>
                </div>
                <div className="hidden md:block">
                  <p className="text-[12.5px] leading-[1.85] text-ink-soft">{p.fields.excerpt.slice(0, 78)}…</p>
                  <p className="mt-2 text-[11px] text-ink-muted">
                    {p.fields.date} · {p.fields.readTime}
                  </p>
                </div>
              </Link>
            ))}
            {filtered.length === 0 && (
              <p className="py-16 text-center text-[13px] text-ink-muted">
                이 주제의 글은 아직 준비 중입니다.
              </p>
            )}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Need an answer now?"
        title={
          <>
            글보다 빠른 답이 필요할 때,
            <br className="hidden sm:block" /> 채널톡으로 물어보세요.
          </>
        }
      />
    </>
  );
};

export default Blog;
