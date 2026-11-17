import type React from "react";
import SEO from "../components/SEO";
import { PageHero, SectionHead, Accordion, CTABand, ConsultButton, ArrowLink } from "../components/ui";
import { site } from "../data/site";

const capabilities = [
  {
    title: "회차와 좌석 확인",
    body: "날짜와 시간대, 인원, 선호하는 구역을 기준으로 실제 예매 가능한 회차와 좌석을 확인합니다.",
  },
  {
    title: "예매 진행",
    body: "확인된 조건에 동의하신 뒤 예매를 진행합니다. 금액과 수수료는 진행 전에 다시 한 번 정리해 안내합니다.",
  },
  {
    title: "모바일 · 실물 발권",
    body: "모바일 티켓 전달, 현장 수령, 실물 발권 등 판매처가 지원하는 방식 중 편한 방법으로 준비합니다.",
  },
  {
    title: "취소 · 변경 안내",
    body: "일정이 바뀌었을 때 적용되는 취소·변경 규정을 판매처 기준으로 확인해 안내합니다.",
  },
];

const requests = [
  "오늘 저녁 공연, 2인 좌석이 남아 있는지",
  "주말 전시, 성인 4인 입장권",
  "아이와 함께 볼 수 있는 공연과 좌석 구역",
  "콘서트 선예매 일정과 좌석 등급",
  "스포츠 경기 단체 관람 좌석 배치",
];

const notes = [
  { title: "판매처 정책이 기준입니다", body: "예매·취소·환불 조건은 각 판매처와 공연 주최의 약관을 따릅니다. 상담 시 해당 조건을 함께 확인해 드립니다." },
  { title: "당일 발권은 미리 확인", body: "공연 당일에는 발권이 제한되는 경우가 있습니다. 가능한 시간대를 먼저 확인해 드립니다." },
  { title: "본인 확인이 필요할 수 있습니다", body: "공연에 따라 입장 시 신분 확인이나 예매자 정보 확인이 필요합니다. 필요한 서류는 미리 안내드립니다." },
  { title: "좌석은 실시간으로 변동됩니다", body: "확인한 좌석도 결제 전에 판매될 수 있습니다. 가능한 시점과 대안 좌석을 함께 안내합니다." },
];

const faq = [
  {
    q: "예매 대행은 어떻게 진행되나요?",
    a: "공연명, 희망 날짜와 시간, 인원, 예산을 채널톡으로 알려주시면 가능한 회차와 좌석을 확인해 조건과 함께 안내드립니다. 조건에 동의하신 뒤 예매를 진행하며, 진행 상황은 같은 채널에서 확인하실 수 있습니다.",
  },
  {
    q: "취소나 변경도 도와주시나요?",
    a: "네. 판매처의 취소·변경 가능 기간과 수수료 기준을 확인해 안내드리고, 가능한 범위에서 절차를 함께 진행합니다. 기간이 지난 경우에는 판매처 정책에 따라 처리됩니다.",
  },
  {
    q: "티켓은 어떻게 받나요?",
    a: "모바일 티켓 링크 전달, 예매처 계정으로 발권, 현장 수령, 실물 티켓 전달 중 판매처가 지원하는 방식으로 준비합니다. 수령 방법은 진행 전에 확정해 안내드립니다.",
  },
  {
    q: "해외 공연도 문의할 수 있나요?",
    a: "문의는 가능합니다. 다만 국내에서 준비 가능한 범위, 결제·수령 방법, 일정이 공연마다 달라 먼저 확인이 필요합니다. 확인 가능한 범위와 불가능한 부분을 나눠 안내드립니다.",
  },
];

const TicketService: React.FC = () => (
  <>
    <SEO
      title="티켓 컨시어지 — 공연·전시 예매와 발권"
      description="공연·전시·스포츠 티켓의 회차와 좌석을 확인하고, 예매부터 모바일·실물 발권, 취소·변경 안내까지 고릴라티켓이 함께합니다."
      keywords="공연 예매 대행,전시 티켓,콘서트 예매,스포츠 티켓,모바일 티켓 발권,단체 관람"
      faqItems={faq.map((f) => ({ question: f.q, answer: f.a }))}
    />
    <PageHero
      eyebrow="Service 01 — Ticket"
      crumbs={[{ label: "서비스", to: "/services/ticket" }, { label: "티켓 컨시어지" }]}
      title={
        <>
          보고 싶은 공연을,
          <br />
          가장 편한 자리에서.
        </>
      }
      lead="회차와 좌석을 함께 확인하고, 예매부터 발권·수령까지 이어서 안내합니다. 무대까지의 거리도, 예산도 놓치지 않도록."
    />

    <section className="border-b border-line bg-ivory">
      <div className="wrap py-20 md:py-28">
        <SectionHead
          eyebrow="What we handle"
          title={<>확인부터 발권까지,<br className="hidden md:block" /> 한 사람이 맡습니다.</>}
          lead="상담이 여러 사람에게 넘어가지 않도록, 접수한 담당자가 끝까지 확인합니다."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <div key={c.title} className="bg-ivory-light p-7 md:p-9">
              <span className="font-display text-[11px] tracking-[0.2em] text-brass">0{i + 1}</span>
              <h3 className="mt-4 font-display text-[1.2rem] text-ink">{c.title}</h3>
              <p className="mt-3 text-[13.5px] leading-[1.9] text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-ivory-light">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHead
            eyebrow="Typical requests"
            title={<>이런 문의가<br />가장 많습니다.</>}
            lead="한 줄만 남겨주셔도 확인할 수 있습니다. 정확한 공연명을 모르셔도 괜찮습니다."
          />
          <div className="mt-8">
            <ConsultButton label="문의 남기기" />
          </div>
        </div>
        <ul className="border-t border-line">
          {requests.map((r, i) => (
            <li key={r} className="flex items-baseline gap-5 border-b border-line py-6">
              <span className="font-display text-[11px] tracking-[0.18em] text-brass">0{i + 1}</span>
              <p className="font-display text-[1.02rem] leading-relaxed text-ink">{r}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="border-b border-line bg-ivory">
      <div className="wrap py-20 md:py-28">
        <SectionHead eyebrow="Before you book" title={<>알아두시면 좋은 점</>} />
        <div className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {notes.map((n) => (
            <div key={n.title} className="border-t border-line pt-5">
              <h3 className="font-display text-[1.05rem] text-ink">{n.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{n.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-6 text-[13px] text-ink-muted">
          <span>상담 {site.phone}</span>
          <span className="hidden h-3 w-px bg-line sm:block" />
          <ArrowLink to="/how-to-use">이용 절차 자세히 보기</ArrowLink>
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-ivory-light">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHead eyebrow="FAQ" title={<>티켓 문의</>} lead="더 자세한 내용은 FAQ에서 확인하실 수 있습니다." />
        <Accordion items={faq.map((f) => ({ q: f.q, a: f.a }))} />
      </div>
    </section>

    <CTABand
      eyebrow="Ticket consultation"
      title={
        <>
          공연명과 날짜만 알려주세요.
          <br className="hidden sm:block" /> 남은 좌석부터 확인해 드립니다.
        </>
      }
      body="채널톡으로 문의를 남겨주시면 담당자가 가능한 회차와 좌석, 조건을 확인해 안내드립니다."
    />
  </>
);

export default TicketService;
