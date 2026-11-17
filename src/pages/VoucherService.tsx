import type React from "react";
import SEO from "../components/SEO";
import { PageHero, SectionHead, Accordion, CTABand, ConsultButton, ArrowLink } from "../components/ui";

const kinds = [
  {
    title: "문화 · 도서 상품권",
    body: "문화생활과 도서 구매에 두루 쓰이는 상품권입니다. 선물용으로 가장 많이 찾으시고, 사용처와 유효기간을 함께 확인해 드립니다.",
  },
  {
    title: "기프트카드 · 모바일 쿠폰",
    body: "특정 브랜드나 온라인 스토어에서 쓰는 카드형 상품입니다. 필요한 브랜드와 금액을 알려주시면 준비 가능한 범위를 확인합니다.",
  },
  {
    title: "체험 · 지역 이용권",
    body: "전시 관람, 체험 프로그램, 지역 시설 이용권처럼 날짜와 장소가 정해진 바우처입니다. 사용 기간과 예약 필요 여부를 먼저 확인합니다.",
  },
  {
    title: "단체 · 선물 묶음",
    body: "여러 장을 나눠 전달해야 할 때, 금액과 브랜드를 조합해 한 번에 정리합니다. 포장과 전달 방식도 함께 상의합니다.",
  },
];

const checks = [
  { title: "유효기간", body: "상품권마다 사용 기간이 다릅니다. 받는 분이 사용할 시점을 기준으로 기간이 충분한지 확인합니다." },
  { title: "사용처", body: "같은 이름의 상품권이라도 쓸 수 있는 곳이 다를 수 있습니다. 실제 사용할 곳에서 쓸 수 있는지 확인해 드립니다." },
  { title: "잔액과 분할 사용", body: "잔액이 남았을 때 추가 결제가 가능한지, 분할 사용이 되는지는 발행사 정책에 따라 다릅니다." },
  { title: "명의와 양도", body: "명의가 등록되는 상품권은 양도가 제한될 수 있습니다. 선물 목적이면 이 부분을 미리 확인합니다." },
];

const faq = [
  {
    q: "상품권은 어떤 기준으로 고르면 되나요?",
    a: "받는 분이 실제로 사용할 곳이 가장 중요한 기준입니다. 사용할 곳과 시점을 알려주시면 그 조건에 맞는 상품권과 유효기간을 확인해 후보를 정리해 드립니다.",
  },
  {
    q: "여러 장을 나눠 받을 수 있나요?",
    a: "가능합니다. 금액과 장수, 전달 방식을 알려주시면 나눠 준비합니다. 모바일 상품권은 개별 링크로, 실물 상품권은 개별 포장으로 준비할 수 있습니다.",
  },
  {
    q: "사용하지 않은 상품권은 어떻게 하나요?",
    a: "유효기간과 사용처에 따라 처리 방법이 다릅니다. 기간이 남아 있다면 사용을 권해드리고, 기간이 지난 경우에는 발행사 정책을 확인해 안내드립니다. 상품권의 재판매나 환금을 목적으로 한 거래는 진행하지 않습니다.",
  },
  {
    q: "결제는 어떻게 하나요?",
    a: "상품권 종류와 수량이 확정되면 금액과 결제 방법을 안내드립니다. 결제 전에 금액과 조건을 다시 확인하고 동의를 받은 뒤 진행합니다.",
  },
];

const VoucherService: React.FC = () => (
  <>
    <SEO
      title="상품권·바우처 — 선물과 사용처까지 확인"
      description="문화·도서 상품권, 기프트카드, 체험 이용권까지. 고릴라티켓이 유효기간과 사용처를 확인해 용도에 맞는 상품권과 바우처를 준비합니다."
      keywords="문화상품권,도서상품권,기프트카드,모바일 쿠폰,체험 이용권,선물용 상품권"
      faqItems={faq.map((f) => ({ question: f.q, answer: f.a }))}
    />
    <PageHero
      eyebrow="Service 02 — Voucher"
      crumbs={[{ label: "서비스", to: "/services/ticket" }, { label: "상품권 · 바우처" }]}
      title={
        <>
          상품권은,
          <br />
          쓰임이 정해져 있을 때 빛납니다.
        </>
      }
      lead="누구에게, 언제, 어디에 쓸지 알려주시면 그 조건에 맞는 상품권과 바우처를 골라 정리해 드립니다."
    />

    <section className="border-b border-line bg-ivory">
      <div className="wrap py-20 md:py-28">
        <SectionHead
          eyebrow="Categories"
          title={<>네 갈래로 정리했습니다.</>}
          lead="종류가 많을수록 이름보다 용도가 중요합니다. 실제 사용할 곳을 기준으로 고릅니다."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {kinds.map((k, i) => (
            <div key={k.title} className="card card-lift p-7 md:p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-[1.2rem] text-ink">{k.title}</h3>
                <span className="font-display text-[11px] tracking-[0.2em] text-ink-muted">0{i + 1}</span>
              </div>
              <p className="mt-3 text-[13.5px] leading-[1.9] text-ink-soft">{k.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-ivory-light">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHead
            eyebrow="Before you choose"
            title={<>고르기 전에<br />확인하는 네 가지.</>}
            lead="이 네 가지만 확인하면 대부분의 실수를 줄일 수 있습니다."
          />
          <div className="mt-8">
            <ConsultButton label="상품권 상담" />
          </div>
        </div>
        <dl className="divide-y divide-line border-y border-line">
          {checks.map((c) => (
            <div key={c.title} className="grid gap-2 py-6 sm:grid-cols-[140px_1fr] sm:gap-6">
              <dt className="font-display text-[1.02rem] text-forest">{c.title}</dt>
              <dd className="text-[13.5px] leading-[1.9] text-ink-soft">{c.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="border-b border-line bg-ivory">
      <div className="wrap grid gap-10 py-20 md:py-24 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <SectionHead eyebrow="Order" title={<>준비 순서</>} />
        </div>
        <ol className="grid gap-8 sm:grid-cols-3 lg:col-span-2">
          {[
            ["01", "용도 확인", "누구에게, 언제, 어디에 쓸지 확인합니다."],
            ["02", "후보 정리", "사용처와 유효기간을 기준으로 후보를 정리합니다."],
            ["03", "전달", "결제 후 모바일 링크 또는 실물로 전달합니다."],
          ].map(([no, title, body]) => (
            <li key={no}>
              <span className="font-display text-[11px] tracking-[0.2em] text-brass">{no}</span>
              <h3 className="mt-3 font-display text-[1.05rem] text-ink">{title}</h3>
              <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{body}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="wrap pb-16">
        <ArrowLink to="/how-to-use">이용 절차 전체 보기</ArrowLink>
      </div>
    </section>

    <section className="border-b border-line bg-ivory-light">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHead eyebrow="FAQ" title={<>상품권 문의</>} />
        <Accordion items={faq.map((f) => ({ q: f.q, a: f.a }))} />
      </div>
    </section>

    <CTABand
      eyebrow="Voucher consultation"
      title={
        <>
          누구에게 줄지 알려주시면
          <br className="hidden sm:block" /> 나머지는 저희가 정리합니다.
        </>
      }
      body="금액과 사용 시점, 전달 방식을 함께 알려주시면 가장 무리가 없는 조합으로 안내드립니다."
    />
  </>
);

export default VoucherService;
