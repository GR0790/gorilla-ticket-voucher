import type React from "react";
import SEO from "../components/SEO";
import { PageHero, SectionHead, Accordion, CTABand, ConsultButton } from "../components/ui";

const scopes = [
  {
    title: "임직원 선물",
    body: "기념일과 명절에 맞춰 상품권과 이용권을 준비합니다. 인원과 예산을 기준으로 조합을 제안합니다.",
  },
  {
    title: "단체 관람",
    body: "공연·전시를 팀 단위로 관람할 때, 좌석 구역과 이동 동선을 함께 고려해 준비합니다.",
  },
  {
    title: "행사 · 추첨 응모권",
    body: "이벤트 경품이나 추첨용 응모권처럼 수량이 정해진 준비를 일정에 맞춰 진행합니다.",
  },
  {
    title: "워크숍 · 체험 프로그램",
    body: "교육이나 워크숍에 쓰는 체험권은 날짜와 예약 방식이 중요합니다. 운영 기관의 조건을 먼저 확인합니다.",
  },
];

const process = [
  { no: "01", title: "요청 정리", body: "용도, 인원 또는 수량, 예산, 필요한 날짜를 정리해 주세요." },
  { no: "02", title: "조건 확인", body: "가능한 범위와 일정, 금액을 확인해 제안드립니다. 대안이 필요한 부분은 함께 정리합니다." },
  { no: "03", title: "확정", body: "제안 중 선택하실 항목을 확정하고, 금액과 일정을 다시 확인합니다." },
  { no: "04", title: "배분 · 전달", body: "개별 전달 또는 일괄 전달로 준비하고, 수령 확인 방법을 안내합니다." },
];

const faq = [
  {
    q: "수량이 많아도 상담이 가능한가요?",
    a: "네. 수량이 많을수록 일정과 배분 방식이 중요합니다. 인원 또는 수량, 필요한 날짜, 예산을 알려주시면 준비 가능한 범위를 확인해 일정을 나눠 안내드립니다.",
  },
  {
    q: "증빙이 필요한데 가능한가요?",
    a: "증빙의 종류와 요건에 따라 방법이 달라집니다. 필요한 서류와 목적을 먼저 말씀해 주시면 가능한 방법을 확인해 안내드립니다. 확인되지 않은 서류를 미리 약속드리지는 않습니다.",
  },
  {
    q: "견적서를 받아볼 수 있나요?",
    a: "진행을 검토하는 단계라면 필요한 항목과 수량을 기준으로 조건을 정리해 안내드립니다. 담당자 결재용 서류가 필요한 경우 요건을 알려주세요.",
  },
  {
    q: "일정이 급한 경우도 가능한가요?",
    a: "가능한 범위에서 우선 확인해 드립니다. 다만 발권과 배송에는 판매처 처리 시간이 필요하므로, 하루 이틀의 여유가 있으면 더 안정적으로 진행할 수 있습니다.",
  },
];

const BusinessService: React.FC = () => (
  <>
    <SEO
      title="기업·단체 — 임직원 선물, 단체 관람, 행사 응모권"
      description="임직원 선물, 단체 관람, 행사 응모권, 워크숍 체험권까지. 수량과 일정이 정해진 준비를 고릴라티켓이 단계적으로 진행합니다."
      keywords="기업 단체 관람,임직원 선물,행사 응모권,워크숍 체험권,단체 티켓"
      faqItems={faq.map((f) => ({ question: f.q, answer: f.a }))}
    />
    <PageHero
      eyebrow="Service 03 — Business"
      crumbs={[{ label: "서비스", to: "/services/ticket" }, { label: "기업 · 단체" }]}
      title={
        <>
          수량과 일정이 있는 준비는
          <br />
          방식이 다릅니다.
        </>
      }
      lead="한 장이 아니라 수십, 수백 장을 다룰 때는 배분과 일정 관리가 먼저입니다. 요청을 정리하는 단계부터 함께합니다."
    />

    <section className="border-b border-line bg-ivory">
      <div className="wrap py-20 md:py-28">
        <SectionHead
          eyebrow="Scope"
          title={<>이런 준비를 함께합니다.</>}
          lead="정해진 상품을 나열하기보다, 목적에 맞는 준비 방식을 찾습니다."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line md:grid-cols-2">
          {scopes.map((s, i) => (
            <div key={s.title} className="bg-ivory-light p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-[1.22rem] text-ink">{s.title}</h3>
                <span className="font-display text-[11px] tracking-[0.2em] text-ink-muted">0{i + 1}</span>
              </div>
              <p className="mt-3 max-w-md text-[13.5px] leading-[1.9] text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-ivory-light">
      <div className="wrap py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHead
            eyebrow="Process"
            title={<>네 단계로<br />정리합니다.</>}
            lead="확정 전에 조건을 문서처럼 남기는 것이 단체 준비에서 가장 중요합니다."
          />
          <ol className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2">
            {process.map((p) => (
              <li key={p.no} className="bg-ivory p-7">
                <span className="font-display text-[11px] tracking-[0.2em] text-brass">{p.no}</span>
                <h3 className="mt-4 font-display text-[1.05rem] text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-14 flex flex-col gap-3 sm:flex-row">
          <ConsultButton label="기업 · 단체 문의" />
          <a href="tel:01021380790" className="btn-outline">
            전화로 문의
          </a>
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-ivory">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHead eyebrow="Checklist" title={<>문의 전에 정리하면<br />빠른 네 가지.</>} />
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {[
              ["용도", "선물인지, 관람인지, 행사 경품인지"],
              ["수량", "인원 또는 장수, 필요한 경우 늘어날 수 있는지"],
              ["일정", "전달 희망일과 사용 예정일"],
              ["예산", "1인당 또는 전체 기준"],
            ].map(([k, v]) => (
              <li key={k} className="grid gap-1 py-5 sm:grid-cols-[100px_1fr] sm:gap-6">
                <span className="font-display text-[1rem] text-forest">{k}</span>
                <span className="text-[13.5px] leading-[1.9] text-ink-soft">{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[14px] border border-line bg-ivory-light p-8 md:p-10">
          <p className="eyebrow">A note</p>
          <p className="mt-5 font-display text-[1.15rem] leading-[1.7] text-ink">
            “확인되지 않은 일정은
            <br />
            약속하지 않습니다.”
          </p>
          <p className="mt-4 text-[13px] leading-[1.9] text-ink-soft">
            단체 준비는 한 번의 실수가 전체 일정에 영향을 줍니다. 그래서 가능한 범위와
            어려운 부분을 나눠서 먼저 말씀드립니다.
          </p>
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-ivory-light">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHead eyebrow="FAQ" title={<>단체 문의</>} />
        <Accordion items={faq.map((f) => ({ q: f.q, a: f.a }))} />
      </div>
    </section>

    <CTABand
      eyebrow="Business consultation"
      title={
        <>
          용도와 수량만 정리해 주세요.
          <br className="hidden sm:block" /> 일정과 조건을 함께 맞춰 드립니다.
        </>
      }
      body="기업·단체 문의는 채널톡으로 접수됩니다. 담당자가 조건을 확인한 뒤 가능한 일정과 방법을 안내드립니다."
    />
  </>
);

export default BusinessService;
