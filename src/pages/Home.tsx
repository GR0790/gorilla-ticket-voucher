import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { Accordion, ArrowLink, CTABand, ConsultButton, SectionHead } from "../components/ui";
import { blogPosts } from "../data/blogPosts";
import { site } from "../data/site";

const heroValues = [
  { value: "24시간", label: "채널톡 1:1 상담", note: "문의는 언제든" },
  { value: "무료", label: "상담 비용 없음", note: "조건 확인까지" },
  { value: "전 과정", label: "예매 · 발권 · 수령", note: "단계별 안내" },
  { value: "최소 정보", label: "필요한 정보만", note: "확인 후 진행" },
];

const services = [
  {
    no: "01",
    to: "/services/ticket",
    title: "티켓 컨시어지",
    kicker: "공연 · 전시 · 스포츠",
    body: "보고 싶은 공연과 날짜, 좌석 기준을 알려주시면 가능한 회차와 구역을 확인해 안내합니다.",
    tags: ["공연", "전시", "스포츠"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M3 9.2c0-1 .8-1.8 1.8-1.8h14.4c1 0 1.8.8 1.8 1.8v1.2a2.6 2.6 0 0 0 0 5.2v1.2c0 1-.8 1.8-1.8 1.8H4.8c-1 0-1.8-.8-1.8-1.8v-1.2a2.6 2.6 0 0 0 0-5.2V9.2Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path d="M14 8v9" stroke="currentColor" strokeWidth="1.1" strokeDasharray="1.6 2.2" />
      </svg>
    ),
  },
  {
    no: "02",
    to: "/services/voucher",
    title: "상품권 · 바우처",
    kicker: "선물과 사용처까지",
    body: "문화상품권, 도서·문화 바우처, 모바일 이용권까지. 쓰임에 맞는 상품을 골라 정리해 드립니다.",
    tags: ["문화상품권", "기프트카드", "이용권"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <rect x="2.8" y="6" width="18.4" height="12" rx="1.8" stroke="currentColor" strokeWidth="1.1" />
        <path d="M2.8 10.2h18.4" stroke="currentColor" strokeWidth="1.1" />
        <path d="M6.4 14.4h4.2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    no: "03",
    to: "/services/business",
    title: "기업 · 단체",
    kicker: "수량과 일정이 있는 의뢰",
    body: "임직원 선물, 단체 관람, 행사 응모권처럼 수량과 일정이 정해진 준비를 함께합니다.",
    tags: ["단체 관람", "임직원 선물", "행사"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M3.2 20V9.6l8.8-4.4 8.8 4.4V20" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M9 20v-5.4h6V20" stroke="currentColor" strokeWidth="1.1" />
        <path d="M7.4 12.4h2.2M14.4 12.4h2.2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
];

const steps = [
  { no: "01", title: "상담 접수", body: "채널톡으로 공연명 또는 상품명, 날짜, 수량, 예산을 알려주세요." },
  { no: "02", title: "조건 확인", body: "좌석·일정·유효기간·수량 등 가능 여부를 확인해 조건과 함께 안내드립니다." },
  { no: "03", title: "진행", body: "안내드린 조건에 동의하시면 예매·발권·구매를 진행합니다." },
  { no: "04", title: "전달", body: "모바일 티켓이나 상품권을 전달하고, 수령 방법과 사용 시 유의사항을 정리해 드립니다." },
];

const principles = [
  {
    title: "조건을 먼저 말합니다",
    body: "가능한지, 얼마인지, 언제까지인지. 확인되지 않은 내용을 확정된 것처럼 안내하지 않습니다.",
  },
  {
    title: "필요한 정보만 묻습니다",
    body: "예매와 전달에 실제로 필요한 정보만 확인합니다. 먼저 요구하는 정보는 없습니다.",
  },
  {
    title: "기록으로 남깁니다",
    body: "구두로 끝내지 않고 상담 채널에 조건과 진행 상황을 남겨, 서로 같은 내용을 확인할 수 있게 합니다.",
  },
];

const scenes = [
  { title: "선물용 상품권을 여러 장 준비할 때", body: "금액과 브랜드, 사용 시점을 알려주시면 한 번에 정리해 드립니다." },
  { title: "단체로 공연을 보러 갈 때", body: "인원과 좌석 배치 기준을 함께 확인해 구역을 잡습니다." },
  { title: "해외 공연 · 페스티벌을 준비할 때", body: "국내에서 준비 가능한 범위와 일정을 먼저 확인해 드립니다." },
  { title: "임직원 선물과 행사 응모권", body: "수량이 많은 준비는 일정을 나눠 단계적으로 진행합니다." },
];

const homeFaq = [
  {
    q: "상담은 무료인가요?",
    a: "네. 조건 확인과 안내까지는 비용이 들지 않습니다. 실제 예매나 구매를 진행할 때 금액과 조건을 다시 확인하고 동의를 받습니다.",
  },
  {
    q: "어떤 정보를 알려드려야 하나요?",
    a: "공연명이나 상품명, 희망 날짜, 수량, 예산 정도면 충분합니다. 그 밖에 필요한 정보는 확인 과정에서 하나씩 안내드립니다.",
  },
  {
    q: "당일 문의도 가능한가요?",
    a: "채널톡 상담은 24시간 열려 있습니다. 다만 공연 당일 발권은 판매처 정책에 따라 어려울 수 있어, 먼저 가능 여부를 확인해 드립니다.",
  },
  {
    q: "상품권 유효기간이 지나면 어떻게 되나요?",
    a: "상품권 종류와 발행사 정책에 따라 다릅니다. 상담 시 유효기간과 사용처를 함께 확인해 드리며, 기간이 지난 상품권은 안내가 제한될 수 있습니다.",
  },
];

const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden border-b border-line bg-ivory">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[860px] -translate-x-1/2 opacity-[0.5]"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(217,190,138,0.22) 0%, rgba(247,244,237,0) 68%)",
      }}
    />
    <div className="wrap relative grid items-center gap-14 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
      <div className="animate-rise">
        <div className="flex items-center gap-3">
          <span className="gold-rule" />
          <p className="eyebrow">Ticket &amp; Voucher Concierge</p>
        </div>
        <h1 className="display-hero mt-7 text-ink">
          티켓과 바우처,
          <br />
          끝까지 함께.
        </h1>
        <p className="lead mt-7 max-w-xl">
          공연·전시 예매부터 상품권과 바우처 준비, 기업·단체 의뢰까지.
          조건을 먼저 확인하고 가장 편한 방법으로 안내하는 고릴라티켓의
          컨시어지입니다.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ConsultButton label="채널톡 1:1 상담" />
          <Link to="/how-to-use" className="btn-outline">
            이용 절차 보기
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="mt-6 text-[12px] tracking-wide text-ink-muted">
          상담 무료 · {site.hours} · {site.phone}
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-[400px] animate-fade lg:max-w-none">
        <div
          aria-hidden="true"
          className="absolute inset-x-6 bottom-16 top-0 rounded-t-[999px] border border-brass/30"
        />
        <div className="relative mx-auto w-[84%] overflow-hidden rounded-t-[999px] border border-line bg-white shadow-[0_50px_90px_-60px_rgba(20,24,27,0.6)]">
          <img
            src="/gorilla-mascot.webp"
            alt={`${site.name} 마스코트`}
            width={1000}
            height={1000}
            className="h-full w-full object-cover object-top"
            loading="eager"
          />
        </div>

        <div className="relative -mt-8 ml-0 w-[86%] max-w-[300px] rotate-[-3deg] rounded-[10px] border border-line bg-ivory-light px-5 py-4 shadow-[0_24px_50px_-38px_rgba(20,24,27,0.65)] sm:ml-2">
          <div className="flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.24em] text-brass">Gorilla Ticket</span>
            <span className="text-[9px] uppercase tracking-[0.24em] text-ink-muted">Admit One</span>
          </div>
          <div className="my-3 border-t border-dashed border-line" />
          <p className="font-display text-[15px] leading-snug text-ink">상담은 채널톡으로</p>
          <p className="mt-1 text-[11px] text-ink-muted">1:1 · {site.hours}</p>
        </div>
      </div>
    </div>

    <div className="wrap">
      <dl className="grid grid-cols-2 gap-y-8 border-t border-line py-8 md:grid-cols-4 md:py-10">
        {heroValues.map((v) => (
          <div key={v.label} className="px-1 md:px-2">
            <dt className="font-display text-[1.45rem] leading-none text-forest md:text-[1.6rem]">
              {v.value}
            </dt>
            <dd className="mt-2.5 text-[12.5px] text-ink-soft">{v.label}</dd>
            <dd className="mt-0.5 text-[11px] text-ink-muted">{v.note}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

const ServicesSection: React.FC = () => (
  <section className="border-b border-line bg-ivory-light">
    <div className="wrap py-20 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHead
          eyebrow="Services"
          title={<>필요한 일을<br className="hidden md:block" /> 세 갈래로 나눴습니다.</>}
          lead="티켓, 상품권, 단체 의뢰. 각각에 맞는 확인 절차와 안내 방식이 다릅니다."
        />
        <div className="hidden md:block">
          <ArrowLink to="/how-to-use">전체 이용 절차 보기</ArrowLink>
        </div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {services.map((s) => (
          <Link key={s.to} to={s.to} className="card card-lift group flex flex-col p-7 md:p-8">
            <div className="flex items-start justify-between">
              <span className="text-brass">{s.icon}</span>
              <span className="font-display text-[11px] tracking-[0.2em] text-ink-muted">{s.no}</span>
            </div>
            <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-brass">{s.kicker}</p>
            <h3 className="display-sub mt-3 text-ink">{s.title}</h3>
            <p className="mt-4 flex-1 text-[13.5px] leading-[1.85] text-ink-soft">{s.body}</p>
            <div className="mt-7 flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
                <span key={t} className="rounded-full border border-line px-2.5 py-1 text-[10.5px] text-ink-muted">
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-7 inline-flex items-center gap-2 text-[12.5px] text-forest">
              자세히 보기
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
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
  <section className="border-b border-line bg-ivory">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHead
          eyebrow="How it works"
          title={<>복잡한 절차는 없습니다.<br />네 단계면 충분합니다.</>}
          lead="상담에서 끝나지 않고, 전달과 사용 안내까지 이어집니다."
        />
        <div className="mt-8 hidden lg:block">
          <ArrowLink to="/how-to-use">단계별 자세히 보기</ArrowLink>
        </div>
      </div>

      <ol className="relative">
        <span aria-hidden="true" className="absolute bottom-4 left-[15px] top-4 w-px bg-line" />
        {steps.map((s) => (
          <li key={s.no} className="relative flex gap-6 pb-10 last:pb-0">
            <span className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brass/40 bg-ivory font-display text-[10.5px] tracking-wider text-brass">
              {s.no}
            </span>
            <div className="pt-0.5">
              <h3 className="font-display text-[1.15rem] text-ink">{s.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-[1.9] text-ink-soft">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const PrinciplesSection: React.FC = () => (
  <section className="border-b border-line bg-ivory-deep">
    <div className="wrap py-20 md:py-28">
      <SectionHead
        eyebrow="Our principles"
        title={<>믿음은 말이 아니라<br className="hidden md:block" /> 방식에서 나옵니다.</>}
        lead="고릴라티켓이 상담을 진행하는 세 가지 기준입니다."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line md:grid-cols-3">
        {principles.map((p, i) => (
          <div key={p.title} className="bg-ivory-light p-7 md:p-8">
            <span className="font-display text-[11px] tracking-[0.2em] text-brass">0{i + 1}</span>
            <h3 className="mt-5 font-display text-[1.2rem] text-ink">{p.title}</h3>
            <p className="mt-3 text-[13px] leading-[1.9] text-ink-soft">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ScenesSection: React.FC = () => (
  <section className="border-b border-line bg-ivory">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <SectionHead
        eyebrow="For these moments"
        title={<>이런 때<br />함께합니다.</>}
        lead="정해진 상품만 파는 곳이 아니라, 상황에 맞는 방법을 찾는 곳입니다."
      />
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {scenes.map((s) => (
          <div key={s.title} className="border-t border-line pt-5">
            <h3 className="font-display text-[1.05rem] leading-snug text-ink">{s.title}</h3>
            <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const JournalSection: React.FC = () => {
  const latest = [...blogPosts].sort((a, b) => (a.fields.date < b.fields.date ? 1 : -1)).slice(0, 3);
  return (
    <section className="border-b border-line bg-ivory-light">
      <div className="wrap py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead eyebrow="Journal" title={<>알아두면 편한 이야기</>} />
          <ArrowLink to="/blog">이야기 전체 보기</ArrowLink>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {latest.map((p) => (
            <Link key={p.fields.id} to={`/blog/${p.fields.id}`} className="group block">
              <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.16em] text-ink-muted">
                <span className="text-brass">{p.fields.category}</span>
                <span className="h-px w-5 bg-line" />
                <span>{p.fields.readTime}</span>
              </div>
              <h3 className="mt-4 font-display text-[1.12rem] leading-[1.5] text-ink transition-colors group-hover:text-forest">
                {p.fields.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-[13px] leading-[1.85] text-ink-soft">{p.fields.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQTeaserSection: React.FC = () => (
  <section className="border-b border-line bg-ivory">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <SectionHead eyebrow="FAQ" title={<>자주 묻는 질문</>} lead="상담 전에 미리 확인하면 더 빠릅니다." />
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
      title="티켓·상품권·바우처 컨시어지"
      description="공연·전시 티켓 예매부터 상품권과 바우처 준비, 기업·단체 의뢰까지. 고릴라티켓이 조건을 먼저 확인하고 채널톡 1:1 상담으로 안내합니다."
      keywords="고릴라티켓,티켓 컨시어지,공연 예매 대행,전시 티켓 예매,상품권 구매 대행,바우처,단체 관람,기업 선물"
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
