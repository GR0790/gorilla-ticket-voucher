import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { PageHero, SectionHead, ConsultButton, CTABand, ArrowLink, ChatGlyph } from "../components/ui";
import { site } from "../data/site";

const channels = [
  {
    title: "채널톡 1:1 상담",
    tag: "기본",
    body: "사이트의 상담 버튼으로 바로 열립니다. 조건과 진행 상황이 대화에 남아, 나중에 같은 내용을 다시 확인할 수 있습니다.",
    detail: "24시간 접수",
  },
  {
    title: "전화 상담",
    tag: "빠른 확인",
    body: "급하게 확인할 내용이 있을 때 사용합니다. 통화로 확인한 조건도 채널톡 대화에 정리해 남겨드립니다.",
    detail: site.phone,
  },
  {
    title: "기업 · 단체 문의",
    tag: "별도 접수",
    body: "용도, 수량, 일정, 예산을 정리해 남겨주시면 담당자가 확인 후 제안드립니다. 검토용 조건 정리도 가능합니다.",
    detail: "채널톡으로 접수",
  },
];

const ready = [
  "공연명 또는 상품명 (기억나는 단서도 괜찮습니다)",
  "희망 날짜와 시간대",
  "인원 또는 장수",
  "예산 범위",
];

const Contact: React.FC = () => (
  <>
    <SEO
      title="상담 — 채널톡 1:1 문의"
      description="고릴라티켓 상담 안내. 채널톡 1:1 상담은 24시간 접수되며, 티켓·상품권·기업 단체 문의를 담당자가 확인해 안내합니다."
      keywords="고릴라티켓 상담,채널톡 상담,티켓 문의,상품권 문의"
    />
    <PageHero
      eyebrow="Contact"
      crumbs={[{ label: "상담" }]}
      title={
        <>
          상담은 채널톡에서
          <br />
          시작합니다.
        </>
      }
      lead="전화보다 대화가 편하시다면 채널톡을, 급한 확인이 필요하면 전화를 이용해 주세요. 어느 쪽이든 상담은 무료입니다."
    />

    <section className="border-b border-line bg-ivory">
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[14px] border border-line bg-forest-deep p-8 text-ivory md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full opacity-50"
              style={{ background: "radial-gradient(circle, rgba(217,190,138,0.25) 0%, rgba(11,35,30,0) 70%)" }}
            />
            <p className="eyebrow text-brass-light">Channel talk</p>
            <h2 className="display-sub mt-5 text-ivory">
              1:1 대화로
              <br />
              가장 정확하게 안내합니다.
            </h2>
            <p className="mt-5 max-w-md text-[13.5px] leading-[1.95] text-ivory/65">
              문의 내용과 조건이 대화에 남습니다. 진행 상황을 다시 확인하고 싶을 때
              같은 창에서 이어서 물어보세요.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ConsultButton variant="light" label="채널톡 상담 시작" />
              <a href={site.phoneHref} className="btn-ghost-light">
                전화 {site.phone}
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ivory/10 pt-6 text-[12px] text-ivory/45">
              <span className="inline-flex items-center gap-2">
                <ChatGlyph className="h-3.5 w-3.5" />
                {site.hoursNote}
              </span>
              <span>{site.hours}</span>
            </div>
          </div>

          <div className="rounded-[14px] border border-line bg-ivory-light p-8 md:p-10">
            <p className="eyebrow">Prepare</p>
            <h2 className="mt-4 font-display text-[1.25rem] text-ink">
              이 네 가지만 있으면
              <br />
              바로 확인할 수 있습니다.
            </h2>
            <ul className="mt-7 space-y-3">
              {ready.map((r, i) => (
                <li key={r} className="flex items-baseline gap-3 border-b border-line pb-3 text-[13px] text-ink-soft">
                  <span className="font-display text-[10.5px] tracking-[0.16em] text-brass">0{i + 1}</span>
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12px] leading-relaxed text-ink-muted">
              정확한 정보가 없어도 상담은 가능합니다. 확인 가능한 부분부터 안내드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-ivory-light">
      <div className="wrap py-20 md:py-28">
        <SectionHead eyebrow="Channels" title={<>상황에 맞는 방법으로</>} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line md:grid-cols-3">
          {channels.map((c) => (
            <div key={c.title} className="flex flex-col bg-ivory p-7 md:p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-[1.1rem] text-ink">{c.title}</h3>
                <span className="rounded-full border border-brass/40 px-2.5 py-0.5 text-[10px] tracking-wide text-brass">
                  {c.tag}
                </span>
              </div>
              <p className="mt-4 flex-1 text-[13px] leading-[1.9] text-ink-soft">{c.body}</p>
              <p className="mt-6 text-[12px] text-ink-muted">{c.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ArrowLink to="/faq">상담 전 자주 묻는 질문 보기</ArrowLink>
        </div>
      </div>
    </section>

    <section className="bg-ivory">
      <div className="wrap flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] text-ink-soft">
          예매·발권 조건은 각 판매처의 약관을 따릅니다.{" "}
          <Link to="/terms" className="link-quiet">
            이용약관
          </Link>
          {" · "}
          <Link to="/privacy" className="link-quiet">
            개인정보처리방침
          </Link>
        </p>
        <ArrowLink to="/how-to-use">이용 절차 보기</ArrowLink>
      </div>
    </section>

    <CTABand
      eyebrow="Consultation"
      title={
        <>
          망설여지는 부분이 있다면
          <br className="hidden sm:block" /> 먼저 물어보세요.
        </>
      }
      body="상담만으로도 충분합니다. 진행 여부는 조건을 확인한 뒤 결정하셔도 됩니다."
    />
  </>
);

export default Contact;
