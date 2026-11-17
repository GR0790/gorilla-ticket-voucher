import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { PageHero, SectionHead, CTABand, ConsultButton, ArrowLink } from "../components/ui";
import { site } from "../data/site";

const steps = [
  {
    no: "01",
    title: "채널톡으로 상담 접수",
    body: "사이트의 상담 버튼을 누르면 채널톡 1:1 대화가 열립니다. 공연명이나 상품명, 날짜, 수량, 예산을 편하게 적어주세요.",
    points: ["정확한 이름을 몰라도 괜찮습니다", "사진이나 링크를 보내주셔도 됩니다", "문의는 24시간 접수됩니다"],
  },
  {
    no: "02",
    title: "가능 여부와 조건 확인",
    body: "담당자가 회차·좌석·유효기간·수량을 확인합니다. 가능한 범위와 어려운 부분, 금액과 일정을 함께 안내드립니다.",
    points: ["금액과 조건은 진행 전에 확정", "대안이 필요한 경우 함께 제안", "확인되지 않은 내용은 약속하지 않습니다"],
  },
  {
    no: "03",
    title: "조건 확인 후 진행",
    body: "안내드린 조건을 확인하시고 동의하시면 예매·발권·구매를 진행합니다. 결제가 필요한 경우 금액과 방법을 다시 확인합니다.",
    points: ["결제 전 금액 재확인", "상담 채널에 조건 기록", "진행 상황은 같은 채널에서 안내"],
  },
  {
    no: "04",
    title: "티켓 · 상품권 준비",
    body: "판매처 정책에 따라 모바일 티켓, 계정 발권, 현장 수령, 실물 전달 등으로 준비합니다. 준비되는 대로 전달 방법을 안내드립니다.",
    points: ["모바일 링크 또는 실물 전달", "수령에 필요한 정보 안내", "일정 변동 시 즉시 공유"],
  },
  {
    no: "05",
    title: "수령과 사용 안내",
    body: "받으신 뒤에는 사용 방법과 유의사항을 정리해 드립니다. 관람일이나 사용 기간이 지나기 전에 한 번 더 확인하실 수 있도록 안내합니다.",
    points: ["입장·사용 시 확인 사항 정리", "취소·변경 규정 안내", "이용 후 문의도 같은 채널에서"],
  },
];

const prepare = [
  ["무엇을", "공연명·전시명 또는 상품권 종류"],
  ["언제", "관람일 또는 사용 예정일"],
  ["몇 개", "인원 또는 장수"],
  ["얼마", "예산 범위 (1인당 또는 전체)"],
];

const mistakes = [
  {
    title: "유효기간을 나중에 확인하는 경우",
    body: "상품권은 사용 기간이 지나면 쓸 수 없습니다. 선물이라면 받는 분이 실제로 사용할 시점을 기준으로 기간을 확인하세요.",
  },
  {
    title: "좌석을 결제 후에 확인하는 경우",
    body: "좌석은 실시간으로 변동됩니다. 원하는 구역과 예산을 미리 정해두면 대안을 빠르게 찾을 수 있습니다.",
  },
  {
    title: "상담 채널을 확인하지 않는 경우",
    body: "상담은 이 사이트의 채널톡 버튼으로만 시작합니다. 다른 경로로 접근한 링크나 개인 연락처에는 정보를 남기지 마세요.",
  },
];

const safety = [
  {
    title: "먼저 입금을 요구하지 않습니다",
    body: "조건 확인 전에 입금이나 보증금을 먼저 요구하는 경우는 없습니다. 금액과 조건은 확인 후 안내드립니다.",
  },
  {
    title: "필요한 정보만 확인합니다",
    body: "예매와 전달에 필요한 최소한의 정보만 확인합니다. 주민등록번호 전체나 계좌 비밀번호 같은 정보는 요구하지 않습니다.",
  },
  {
    title: "불법 목적 거래는 진행하지 않습니다",
    body: "타인 명의 결제, 부정 취득한 상품권, 재판매를 목적으로 한 대량 구매 등은 확인되는 즉시 진행하지 않습니다.",
  },
  {
    title: "기록이 남는 채널만 사용합니다",
    body: "조건과 진행 상황은 채널톡 대화에 남깁니다. 개인 메신저로만 진행하자는 요청은 받지 않습니다.",
  },
];

const HowToUse: React.FC = () => (
  <>
    <SEO
      title="이용 절차 — 상담부터 수령까지"
      description="고릴라티켓 이용 절차를 단계별로 정리했습니다. 채널톡 상담 접수, 조건 확인, 진행, 전달, 수령 안내까지 한 번에 확인하세요."
      keywords="고릴라티켓 이용 방법,티켓 예매 절차,상품권 구매 절차,채널톡 상담"
    />
    <PageHero
      eyebrow="How to use"
      crumbs={[{ label: "이용 절차" }]}
      title={
        <>
          처음이라면,
          <br />
          이 순서만 기억하세요.
        </>
      }
      lead="상담에서 끝나지 않고 수령과 사용 안내까지 이어집니다. 각 단계에서 확인해야 할 내용을 정리했습니다."
    />

    <section className="border-b border-line bg-ivory">
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {prepare.map(([k, v], i) => (
            <div key={k} className="bg-ivory-light px-6 py-7">
              <span className="font-display text-[11px] tracking-[0.2em] text-brass">0{i + 1}</span>
              <p className="mt-3 font-display text-[1.05rem] text-ink">{k}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[12px] text-ink-muted">
          이 네 가지만 있으면 첫 상담이 훨씬 짧아집니다. 나머지는 확인 과정에서 안내드립니다.
        </p>
      </div>
    </section>

    <section className="border-b border-line bg-ivory-light">
      <div className="wrap py-20 md:py-28">
        <SectionHead eyebrow="Steps" title={<>다섯 단계</>} />
        <div className="mt-14 space-y-px overflow-hidden rounded-[14px] border border-line bg-line">
          {steps.map((s) => (
            <div key={s.no} className="grid gap-6 bg-ivory-light p-7 md:grid-cols-[110px_1.1fr_0.9fr] md:p-10">
              <span className="font-display text-[1.6rem] leading-none text-brass/80">{s.no}</span>
              <div>
                <h3 className="font-display text-[1.22rem] text-ink">{s.title}</h3>
                <p className="mt-3 max-w-lg text-[13.5px] leading-[1.95] text-ink-soft">{s.body}</p>
              </div>
              <ul className="space-y-2 border-l-0 border-line pl-0 md:border-l md:pl-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-muted">
                    <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brass" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-ivory">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHead eyebrow="Common mistakes" title={<>자주 하는 실수</>} />
          <div className="mt-10 divide-y divide-line border-y border-line">
            {mistakes.map((m) => (
              <div key={m.title} className="py-6">
                <h3 className="font-display text-[1.02rem] text-ink">{m.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHead eyebrow="Safe use" title={<>안전하게 이용하는 방법</>} />
          <div className="mt-10 divide-y divide-line border-y border-line">
            {safety.map((s) => (
              <div key={s.title} className="py-6">
                <h3 className="font-display text-[1.02rem] text-ink">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-ivory-light">
      <div className="wrap flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <p className="mt-4 font-display text-[1.35rem] text-ink">
            절차가 정리됐다면, 이제 상담만 남았습니다.
          </p>
          <p className="mt-2 text-[13px] text-ink-muted">문의 {site.phone} · {site.hours}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ConsultButton label="채널톡 1:1 상담" />
          <Link to="/faq" className="btn-outline">
            자주 묻는 질문
          </Link>
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="Still unsure?"
      title={
        <>
          어디서부터 정리해야 할지
          <br className="hidden sm:block" /> 모르겠다면 그대로 알려주세요.
        </>
      }
      body="상황을 그대로 적어주시면, 무엇을 먼저 확인해야 하는지부터 안내드립니다."
    />
    <div className="wrap py-10">
      <ArrowLink to="/services/ticket">서비스 안내로 돌아가기</ArrowLink>
    </div>
  </>
);

export default HowToUse;
