import { useState } from "react";
import type React from "react";
import SEO from "../components/SEO";
import { Accordion, CTABand, ConsultButton, PageHero } from "../components/ui";

type Group = { key: string; label: string; items: { q: string; a: React.ReactNode }[] };

const groups: Group[] = [
  {
    key: "general",
    label: "이용 일반",
    items: [
      {
        q: "고릴라티켓은 어떤 곳인가요?",
        a: "공연·전시 티켓 예매와 상품권·바우처 준비, 기업·단체 의뢰를 채널톡 1:1 상담으로 안내하는 티켓 컨시어지입니다. 상품을 나열하는 대신, 필요한 조건을 확인해 가장 맞는 방법을 찾는 일을 합니다.",
      },
      {
        q: "상담 비용이 있나요?",
        a: "조건 확인과 안내까지는 비용이 들지 않습니다. 실제 예매나 구매를 진행할 때 금액과 조건을 다시 확인하고 동의를 받은 뒤 진행합니다.",
      },
      {
        q: "상담은 언제 가능한가요?",
        a: "채널톡 상담은 24시간 접수됩니다. 담당자가 확인하는 순서대로 답변드리며, 확인이 필요한 사항은 시간이 조금 걸릴 수 있습니다.",
      },
      {
        q: "전화 상담도 가능한가요?",
        a: "가능합니다. 다만 조건과 진행 상황은 기록이 남는 채널톡을 기본으로 사용합니다. 전화로 확인한 내용도 대화에 정리해 남겨드립니다.",
      },
      {
        q: "취급하지 않는 분야가 있나요?",
        a: "불법적인 목적의 거래, 타인 명의 결제, 부정 취득한 상품권, 재판매를 목적으로 한 대량 구매는 진행하지 않습니다. 이 경우에는 이유를 설명드리고 상담을 종료합니다.",
      },
    ],
  },
  {
    key: "ticket",
    label: "티켓",
    items: [
      {
        q: "공연 이름을 정확히 몰라도 문의할 수 있나요?",
        a: "괜찮습니다. 공연장 이름, 출연진, 포스터 사진처럼 기억나는 단서를 보내주시면 확인해 드립니다. 희망 날짜와 인원을 함께 알려주시면 더 빠릅니다.",
      },
      {
        q: "좌석은 어떻게 정하나요?",
        a: "예산과 선호 구역(앞열, 중앙, 통로 쪽 등)을 알려주시면 가능한 좌석을 확인해 안내드립니다. 같은 가격대에서도 남은 좌석이 다르므로 대안을 함께 정리해 드립니다.",
      },
      {
        q: "티켓은 어떤 형태로 받나요?",
        a: "모바일 티켓 링크, 예매처 계정 발권, 현장 수령, 실물 전달 중 판매처가 지원하는 방식으로 준비합니다. 받는 방법은 진행 전에 확정해 안내드립니다.",
      },
      {
        q: "관람일 당일에도 문의할 수 있나요?",
        a: "문의는 가능하지만, 당일 발권은 판매처 정책상 제한되는 경우가 많습니다. 가능한 시간대를 먼저 확인해 드리고, 어려운 경우에는 대안 일정을 안내드립니다.",
      },
      {
        q: "취소와 변경은 어떻게 되나요?",
        a: "판매처와 공연 주최의 취소·변경 규정을 따릅니다. 가능한 기간과 수수료를 확인해 안내드리고, 절차를 함께 진행합니다. 기간이 지난 경우에는 처리되지 않을 수 있습니다.",
      },
    ],
  },
  {
    key: "voucher",
    label: "상품권 · 바우처",
    items: [
      {
        q: "어떤 상품권을 고르면 좋을까요?",
        a: "받는 분이 실제로 사용할 곳이 기준입니다. 사용할 곳과 시점을 알려주시면 그 조건에 맞는 상품권과 유효기간을 확인해 후보를 정리해 드립니다.",
      },
      {
        q: "유효기간이 지난 상품권도 상담 가능한가요?",
        a: "기간이 지난 상품권은 발행사 정책에 따라 사용이 제한됩니다. 상담은 가능하지만 처리 가능 여부를 먼저 확인해 안내드리며, 가능하지 않은 경우에는 이유를 설명드립니다.",
      },
      {
        q: "여러 장을 각각 포장할 수 있나요?",
        a: "가능합니다. 장수와 전달 방식을 알려주시면 개별 링크 또는 개별 포장으로 준비합니다. 전달 일정이 나뉘어 있는 경우에도 일정에 맞춰 준비할 수 있습니다.",
      },
      {
        q: "상품권을 현금으로 바꿔주시나요?",
        a: "아니요. 고릴라티켓은 상품권과 바우처를 준비하고 사용을 안내하는 곳이며, 상품권을 현금으로 교환하는 거래는 취급하지 않습니다.",
      },
    ],
  },
  {
    key: "privacy",
    label: "상담 · 개인정보",
    items: [
      {
        q: "상담할 때 어떤 정보를 알려줘야 하나요?",
        a: "공연명이나 상품명, 날짜, 수량, 예산이면 충분합니다. 진행이 확정된 뒤에는 전달과 수령에 필요한 최소한의 정보만 확인합니다.",
      },
      {
        q: "주민등록번호나 계좌 비밀번호도 필요한가요?",
        a: "아니요. 해당 정보는 요구하지 않습니다. 필요한 정보 이상을 요청받았다면 채널톡 대화 내용과 함께 알려주시면 바로 확인하겠습니다.",
      },
      {
        q: "상담 내용은 어떻게 보관되나요?",
        a: "상담은 채널톡을 통해 진행되며, 조건과 진행 상황 확인을 위해 대화 내용이 보관됩니다. 보관 기간과 삭제 요청 방법은 개인정보처리방침에 정리해 두었습니다.",
      },
      {
        q: "상담 기록을 삭제할 수 있나요?",
        a: "가능합니다. 채널톡 대화에서 요청하시거나 전화로 알려주시면 본인 확인 후 처리합니다. 다만 법령상 보관이 필요한 기록은 예외가 될 수 있습니다.",
      },
    ],
  },
];

const allFaq = groups.flatMap((g) => g.items);

const FAQ: React.FC = () => {
  const [active, setActive] = useState(groups[0].key);
  const current = groups.find((g) => g.key === active) ?? groups[0];

  return (
    <>
      <SEO
        title="자주 묻는 질문"
        description="고릴라티켓 이용에 대해 자주 묻는 질문을 정리했습니다. 상담 비용, 티켓 수령 방법, 상품권 유효기간, 개인정보 처리까지 한 번에 확인하세요."
        keywords="고릴라티켓 FAQ,티켓 예매 문의,상품권 유효기간,상담 비용,개인정보"
        faqItems={allFaq.map((f) => ({ question: f.q, answer: typeof f.a === "string" ? f.a : "" }))}
      />
      <PageHero
        eyebrow="FAQ"
        crumbs={[{ label: "자주 묻는 질문" }]}
        title={
          <>
            묻기 전에
            <br />
            확인해 보세요.
          </>
        }
        lead="상담에서 가장 많이 나오는 질문을 주제별로 정리했습니다. 원하는 답이 없으면 채널톡으로 바로 물어보세요."
      />

      <section className="border-b border-line bg-ivory">
        <div className="wrap py-16 md:py-24">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ 주제">
            {groups.map((g) => (
              <button
                key={g.key}
                type="button"
                role="tab"
                aria-selected={active === g.key}
                onClick={() => setActive(g.key)}
                className={`rounded-full border px-4 py-2 text-[12.5px] transition-colors ${
                  active === g.key
                    ? "border-forest bg-forest text-ivory"
                    : "border-line text-ink-soft hover:border-brass hover:text-forest"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">{current.label}</p>
              <p className="mt-4 font-display text-[1.25rem] leading-[1.6] text-ink">
                {current.key === "general" && "이용 전에 가장 많이 묻는 것들."}
                {current.key === "ticket" && "예매와 발권에 관한 질문."}
                {current.key === "voucher" && "상품권을 고르고 쓰는 일."}
                {current.key === "privacy" && "정보를 어디까지 알려야 하는지."}
              </p>
              <p className="mt-4 text-[13px] leading-[1.9] text-ink-soft">
                {current.items.length}개의 질문이 정리되어 있습니다. 답을 찾지 못하셨다면
                채널톡으로 알려주세요.
              </p>
              <div className="mt-6">
                <ConsultButton label="직접 문의하기" variant="outline" />
              </div>
            </div>
            <Accordion key={current.key} items={current.items} defaultOpen={0} />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ivory-light">
        <div className="wrap py-16 md:py-20">
          <div className="flex flex-col gap-6 rounded-[14px] border border-line bg-ivory p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="eyebrow">Not found</p>
              <p className="mt-3 font-display text-[1.25rem] text-ink">원하는 답이 없으셨나요?</p>
              <p className="mt-2 text-[13px] text-ink-soft">
                상황을 그대로 적어주시면 확인해서 안내드립니다. 상담은 무료입니다.
              </p>
            </div>
            <ConsultButton />
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Ask anything"
        title={
          <>
            정리되지 않은 질문도
            <br className="hidden sm:block" /> 그대로 보내주세요.
          </>
        }
      />
    </>
  );
};

export default FAQ;
