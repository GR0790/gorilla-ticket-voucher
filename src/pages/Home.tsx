import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { Accordion, ArrowLink, CTABand, SectionHead } from "../components/ui";
import { ServiceIcon } from "../components/icons";
import { blogPosts } from "../data/blogPosts";
import { services } from "../data/services";
import { site } from "../data/site";
import { openConsult } from "../lib/consult";

const heroValues = [
  {
    value: "4",
    unit: "가지",
    label: "이용 안내",
    note: "상품권 · 결제 · 게임재화",
  },
  { value: "24", unit: "시간", label: "상담 접수", note: "채널톡 1:1" },
  { value: "1:1", unit: "", label: "담당자 확인", note: "조건을 먼저 안내" },
  { value: "0", unit: "원", label: "상담 비용", note: "진행 전까지 무료" },
];

const steps = [
  {
    no: "01",
    title: "상담 정보 입력",
    body: "성함과 휴대폰 번호를 남기면 채널톡 1:1 상담창이 바로 열립니다.",
  },
  {
    no: "02",
    title: "내용 확인",
    body: "상품권 종류나 결제 방법, 금액을 확인하고 가능한 범위를 정리합니다.",
  },
  {
    no: "03",
    title: "조건 안내",
    body: "진행 가능 여부와 조건, 필요한 절차를 먼저 안내합니다.",
  },
  {
    no: "04",
    title: "동의 후 진행",
    body: "안내된 조건을 확인하고 동의하신 경우에만 다음 단계로 진행합니다.",
  },
];

const principles = [
  {
    title: "조건을 먼저 말합니다",
    body: "가능한지, 얼마인지, 어떤 절차가 필요한지. 확인되지 않은 내용을 확정된 것처럼 안내하지 않습니다.",
  },
  {
    title: "필요한 정보만 묻습니다",
    body: "상담에 필요한 최소한의 정보만 확인합니다. 주민등록번호나 비밀번호 같은 정보는 요구하지 않습니다.",
  },
  {
    title: "기록으로 남깁니다",
    body: "구두로 끝내지 않고 상담 채널에 조건과 진행 상황을 남겨, 서로 같은 내용을 확인할 수 있게 합니다.",
  },
];

const scenes = [
  {
    title: "사용하지 않는 상품권이 남아 있을 때",
    body: "종류와 잔액, 유효기간을 확인하고 정리 절차를 안내합니다.",
  },
  {
    title: "휴대폰 결제 한도를 확인하고 싶을 때",
    body: "통신사 한도와 이번 달 사용 금액을 확인하는 방법부터 안내합니다.",
  },
  {
    title: "카드 할부로 구매를 검토할 때",
    body: "할부 개월과 수수료를 포함한 총액을 먼저 정리해 드립니다.",
  },
  {
    title: "게임 재화 구매를 앞두고 있을 때",
    body: "스토어 계정과 아이템 종류, 환불 기준을 함께 확인합니다.",
  },
];

const homeFaq = [
  {
    q: "상담은 무료인가요?",
    a: "네. 내용 확인과 조건 안내까지는 비용이 들지 않습니다. 실제 진행을 결정할 때 금액과 조건을 다시 확인하고 동의를 받습니다.",
  },
  {
    q: "상담을 시작하려면 무엇을 준비해야 하나요?",
    a: "성함과 휴대폰 번호만 있으면 됩니다. 상담창이 열린 뒤 상품권 종류나 결제 방법, 금액을 알려주시면 확인해 안내드립니다.",
  },
  {
    q: "어떤 상품권을 상담할 수 있나요?",
    a: "모바일 상품권과 기프트카드, 문화·도서 상품권 등을 상담할 수 있습니다. 발행사와 잔액, 유효기간에 따라 가능 범위가 달라집니다.",
  },
  {
    q: "결제나 정산 조건은 어디서 확인하나요?",
    a: "조건은 상담에서 확인한 뒤 안내드립니다. 통신사·카드사·발행사의 정책에 따라 달라지므로, 사이트에서 금액을 미리 약속하지 않습니다.",
  },
];

const HeroConsultTicket: React.FC = () => {
  const [pulsing, setPulsing] = React.useState(false);
  const pulseTimer = React.useRef<number | null>(null);

  React.useEffect(
    () => () => {
      if (pulseTimer.current) window.clearTimeout(pulseTimer.current);
    },
    [],
  );

  /** 클릭·엔터·스페이스: 반동 효과를 재생하며 상담(채널톡) 연결 */
  const handleConsult = () => {
    setPulsing(false);
    window.requestAnimationFrame(() => {
      setPulsing(true);
      if (pulseTimer.current) window.clearTimeout(pulseTimer.current);
      pulseTimer.current = window.setTimeout(() => setPulsing(false), 720);
    });
    openConsult();
  };

  return (
    <div className="mx-auto w-full max-w-[440px] animate-fade lg:max-w-none">
      <button
        type="button"
        aria-label={`${site.name} 채널톡 1:1 상담 연결`}
        onClick={handleConsult}
        className={`group relative block w-full cursor-pointer select-none border-0 bg-transparent p-0 text-left transition-transform duration-300 ease-out hover:scale-[1.02] focus-visible:scale-[1.02] active:scale-[0.995] ${
          pulsing ? "animate-ticket-bounce" : ""
        }`}
      >
        <span
          aria-hidden="true"
          className="absolute -inset-4 rounded-[26px] border border-line/80 bg-gradient-to-b from-white/70 to-transparent transition-colors duration-300 group-hover:border-azure/35"
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -inset-3 rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
            pulsing ? "animate-ticket-glow" : ""
          }`}
          style={{
            boxShadow:
              "0 0 0 1px rgba(56,189,248,0.35), 0 34px 80px -34px rgba(37,99,235,0.55)",
          }}
        />

        <div className="relative overflow-hidden rounded-2xl border border-night-soft/40 bg-night shadow-[0_50px_90px_-50px_rgba(11,18,32,0.8)] transition-shadow duration-300 group-hover:shadow-[0_54px_96px_-46px_rgba(37,99,235,0.5)]">
          <span
            aria-hidden="true"
            className="grid-bg-dark absolute inset-0 opacity-60"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(11,18,32,0) 70%)",
            }}
          />
          <div className="relative flex items-start justify-between px-6 pt-6">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-sky-light">
                Gorilla Ticket
              </p>
              <p className="mt-2 text-[13px] font-semibold text-white">
                1:1 상담 연결
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/70">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              />
              24시간 접수
            </span>
          </div>

          <div className="relative mt-5 px-6">
            <img
              src="/gorilla-mascot-cut.webp"
              alt={`${site.name} 마스코트`}
              width={1000}
              height={1000}
              className="mx-auto h-[236px] w-auto rounded-b-none object-contain object-top drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] sm:h-[270px]"
              loading="eager"
            />
          </div>

          <div className="relative border-t border-white/10 bg-night-deep/60 px-6 py-5">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/40">
              <span>Consult ticket</span>
              <span className="tabular-nums">No. 010-2138-0790</span>
            </div>
            <div className="my-3 border-t border-dashed border-white/15" />
            <ul className="grid grid-cols-2 gap-y-2 text-[11.5px] text-white/70">
              {[
                "상품권 매입",
                "휴대폰 소액결제",
                "신용카드 구매",
                "정보이용료 게임재화",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-sky"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative -mt-6 ml-auto w-[86%] max-w-[300px] rounded-xl border border-line bg-white p-4 shadow-[0_26px_50px_-34px_rgba(11,18,32,0.55)] transition-colors duration-300 group-hover:border-azure/40">
          <div className="flex items-center justify-between">
            <span className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-azure">
              Step 01
            </span>
            <span className="text-[9.5px] font-medium uppercase tracking-[0.2em] text-ink-muted">
              무료
            </span>
          </div>
          <p className="mt-2.5 text-[13.5px] font-semibold leading-snug text-ink">
            성함과 연락처를 남기면
            <br />
            바로 상담창으로 연결됩니다.
          </p>
          <p className="mt-2 text-[11px] text-ink-muted">
            최초 1회만 입력 · 다음부터는 자동 연결
          </p>
        </div>

        <span className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-medium tracking-[0.01em] text-ink-muted transition-colors duration-300 group-hover:text-azure">
          클릭하여 상담 연결
          <span
            aria-hidden="true"
            className="text-[12px] transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </button>
    </div>
  );
};

const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden border-b border-line bg-white">
    <div
      aria-hidden="true"
      className="grid-bg pointer-events-none absolute inset-0 opacity-60"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 -top-52 h-[620px] w-[620px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(56,189,248,0.20) 0%, rgba(255,255,255,0) 66%)",
      }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(37,99,235,0.10) 0%, rgba(255,255,255,0) 70%)",
      }}
    />

    <div className="wrap relative grid items-center gap-14 pb-14 pt-12 md:pb-20 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div className="animate-rise">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 px-3.5 py-1.5">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-azure"
          />
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Voucher · Mobile · Card · Digital
          </p>
        </div>

        <h1 className="display-hero mt-7 break-keep text-ink">
          휴대폰 소액결제 · 정보이용료,
          <br />
          <span className="bg-gradient-to-r from-azure to-sky-deep bg-clip-text text-transparent">
            쉽고 빠르게 사용 가능합니다.
          </span>
        </h1>

        <p className="lead mt-7 max-w-xl">
          휴대폰 소액결제와 정보이용료 게임재화, 상품권 구매·매입까지. 결제 한도와
          가능한 조건을 상담에서 먼저 확인해 안내합니다.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => openConsult()}
            className="group relative flex h-[58px] items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-azure via-azure to-sky-deep px-7 text-[15.5px] font-bold text-white shadow-[0_20px_44px_-18px_rgba(37,99,235,0.95)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                background:
                  "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 55%)",
              }}
            />
            <svg
              className="relative h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20.5 11.6c0 4.2-3.8 7.6-8.5 7.6-.9 0-1.8-.1-2.6-.4L5 20.5l1.1-3.3C4.8 15.9 3.5 13.9 3.5 11.6c0-4.2 3.8-7.6 8.5-7.6s8.5 3.4 8.5 7.6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="8.8" cy="11.6" r="0.95" fill="currentColor" />
              <circle cx="12" cy="11.6" r="0.95" fill="currentColor" />
              <circle cx="15.2" cy="11.6" r="0.95" fill="currentColor" />
            </svg>
            <span className="relative">채널톡 1:1 상담 시작</span>
            <span
              aria-hidden="true"
              className="relative text-[17px] transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </button>
          <Link
            to="/how-to-use"
            className="inline-flex h-[58px] items-center justify-center gap-2 rounded-xl border border-steel bg-white/70 px-7 text-[14.5px] font-semibold text-ink transition-colors hover:border-azure hover:text-azure"
          >
            이용 절차 보기
            <span aria-hidden="true" className="text-[15px]">
              →
            </span>
          </Link>
        </div>

        <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-ink-muted">
          <span>상담 무료</span>
          <span aria-hidden="true" className="h-2.5 w-px bg-steel" />
          <span>{site.hours}</span>
          <span aria-hidden="true" className="h-2.5 w-px bg-steel" />
          <span>전화 {site.phone}</span>
        </p>
      </div>

      {/* 상담 카드 비주얼 — 카드 전체를 누르면 채널톡 1:1 상담으로 연결 */}
      <HeroConsultTicket />
    </div>

    <div className="wrap relative">
      <dl className="grid grid-cols-2 gap-y-8 border-t border-line py-8 md:grid-cols-4 md:py-9">
        {heroValues.map((v) => (
          <div
            key={v.label}
            className="border-l border-line px-4 first:border-l-0 first:pl-0 md:px-6"
          >
            <dt className="flex items-baseline gap-1 text-ink">
              <span className="text-[1.75rem] font-bold leading-none tracking-[-0.03em] md:text-[2rem]">
                {v.value}
              </span>
              <span className="text-[12px] font-semibold text-azure">
                {v.unit}
              </span>
            </dt>
            <dd className="mt-2.5 text-[12.5px] font-medium text-ink">
              {v.label}
            </dd>
            <dd className="mt-0.5 text-[11px] text-ink-muted">{v.note}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

const ServicesSection: React.FC = () => (
  <section className="border-b border-line bg-frost">
    <div className="wrap py-20 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHead
          eyebrow="What we guide"
          title={
            <>
              네 가지 이용 안내.
              <br className="hidden md:block" /> 필요한 하나부터 확인합니다.
            </>
          }
          lead="상품권 매입과 모바일 상품권 구매, 카드 결제, 정보이용료 게임재화. 각 방법마다 확인할 항목이 다릅니다."
        />
        <div className="hidden shrink-0 md:block">
          <ArrowLink to="/how-to-use">전체 이용 절차 보기</ArrowLink>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={s.slug}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-azure/50 hover:shadow-[0_30px_60px_-46px_rgba(11,18,32,0.75)] md:p-8"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-gradient-to-r from-azure to-sky transition-transform duration-300 group-hover:scale-x-100"
            />
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-azure/[0.08] text-azure ring-1 ring-azure/10 transition-colors group-hover:bg-azure group-hover:text-white group-hover:ring-azure">
                <ServiceIcon name={s.icon} className="h-[22px] w-[22px]" />
              </span>
              <span className="num text-[11px] font-semibold text-ink-muted">
                {s.no}
              </span>
            </div>
            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-azure">
              {s.cardKicker}
            </p>
            <h3 className="display-sub mt-2.5 text-ink">{s.title}</h3>
            <p className="mt-3 flex-1 text-[13.5px] leading-[1.85] text-ink-soft">
              {s.cardBody}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line bg-frost px-2.5 py-1 text-[10.5px] font-medium text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-semibold text-azure">
              안내 보기
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const ProcessSection: React.FC = () => (
  <section className="relative overflow-hidden border-b border-line bg-white">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              복잡한 절차는 없습니다.
              <br />네 단계면 충분합니다.
            </>
          }
          lead="상담 접수에서 끝나지 않고, 조건 안내와 진행 확인까지 이어집니다."
        />
        <div className="mt-8 hidden lg:block">
          <ArrowLink to="/how-to-use">단계별 자세히 보기</ArrowLink>
        </div>
      </div>

      <ol className="relative grid gap-3 sm:grid-cols-2">
        {steps.map((s) => (
          <li
            key={s.no}
            className="relative rounded-xl border border-line bg-frost p-6 transition-colors hover:border-azure/40 hover:bg-white"
          >
            <span className="num inline-flex h-8 min-w-8 items-center justify-center rounded-md bg-azure px-2 text-[11px] font-bold text-white">
              {s.no}
            </span>
            <h3 className="mt-5 text-[1.05rem] font-semibold text-ink">
              {s.title}
            </h3>
            <p className="mt-2 text-[13px] leading-[1.85] text-ink-soft">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const PrinciplesSection: React.FC = () => (
  <section className="border-b border-line bg-frost-deep">
    <div className="wrap py-20 md:py-28">
      <SectionHead
        eyebrow="Our principles"
        title={
          <>
            믿음은 말이 아니라
            <br className="hidden md:block" /> 방식에서 나옵니다.
          </>
        }
        lead="고릴라티켓이 상담을 진행하는 세 가지 기준입니다."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {principles.map((p, i) => (
          <div
            key={p.title}
            className="rounded-xl border border-line bg-white p-7 md:p-8"
          >
            <span className="num text-[11px] font-semibold text-azure">
              0{i + 1}
            </span>
            <h3 className="mt-5 text-[1.15rem] font-semibold text-ink">
              {p.title}
            </h3>
            <p className="mt-3 text-[13px] leading-[1.9] text-ink-soft">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ScenesSection: React.FC = () => (
  <section className="border-b border-line bg-white">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <SectionHead
        eyebrow="For these moments"
        title={
          <>
            이런 때
            <br />
            함께합니다.
          </>
        }
        lead="정해진 상품만 안내하는 곳이 아니라, 상황에 맞는 방법을 찾는 곳입니다."
      />
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {scenes.map((s) => (
          <div key={s.title} className="border-t border-line pt-5">
            <h3 className="text-[1.02rem] font-semibold leading-snug text-ink">
              {s.title}
            </h3>
            <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const JournalSection: React.FC = () => {
  const latest = [...blogPosts]
    .sort((a, b) => (a.fields.date < b.fields.date ? 1 : -1))
    .slice(0, 3);
  return (
    <section className="border-b border-line bg-frost">
      <div className="wrap py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead eyebrow="Journal" title={<>알아두면 편한 이야기</>} />
          <ArrowLink to="/blog">이야기 전체 보기</ArrowLink>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {latest.map((p) => (
            <Link
              key={p.fields.id}
              to={`/blog/${p.fields.id}`}
              className="group block"
            >
              <div className="flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                <span className="text-azure">{p.fields.category}</span>
                <span className="h-px w-5 bg-steel" />
                <span>{p.fields.readTime}</span>
              </div>
              <h3 className="mt-4 text-[1.1rem] font-semibold leading-[1.5] text-ink transition-colors group-hover:text-azure">
                {p.fields.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-[13px] leading-[1.85] text-ink-soft">
                {p.fields.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQTeaserSection: React.FC = () => (
  <section className="border-b border-line bg-white">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <SectionHead
          eyebrow="FAQ"
          title={<>자주 묻는 질문</>}
          lead="상담 전에 미리 확인하면 더 빠릅니다."
        />
        <div className="mt-8">
          <ArrowLink to="/faq">FAQ 전체 보기</ArrowLink>
        </div>
      </div>
      <Accordion items={homeFaq.map((f) => ({ q: f.q, a: f.a }))} />
    </div>
  </section>
);

const Home: React.FC = () => (
  <>
    <SEO
      title="상품권 매입·모바일 상품권 구매 절차 안내"
      description="상품권 매입, 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매까지. 확인 절차와 조건을 채널톡 1:1 상담으로 안내합니다."
      keywords="상품권 매입,휴대폰 소액결제 상품권,신용카드 상품권 구매,정보이용료 게임재화,모바일 상품권,채널톡 상담"
      faqItems={homeFaq.map((f) => ({ question: f.q, answer: f.a }))}
    />
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <PrinciplesSection />
    <ScenesSection />
    <JournalSection />
    <FAQTeaserSection />
    <CTABand />
  </>
);

export default Home;
