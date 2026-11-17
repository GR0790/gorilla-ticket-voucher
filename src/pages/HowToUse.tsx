import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowLink, CTABand, ConsultButton, PageHero, SectionHead } from "../components/ui";
import { site } from "../data/site";

const steps = [
  {
    no: "01",
    title: "상담 버튼으로 연결",
    body: "사이트의 상담 버튼을 누르면 성함과 휴대폰 번호를 한 번 확인한 뒤 채널톡 1:1 상담창이 열립니다. 다음부터는 같은 번호로 이어집니다.",
    points: ["최초 1회만 정보 입력", "입력 즉시 상담창 연결", "24시간 접수"],
  },
  {
    no: "02",
    title: "상품권 · 결제 방법 확인",
    body: "상품권 종류와 잔액, 또는 휴대폰·카드 결제 방법과 금액을 확인합니다. 정확한 이름을 몰라도 사진이나 링크로 알려주시면 됩니다.",
    points: ["상품권 종류와 발행사", "결제 방법과 한도", "희망 금액과 일정"],
  },
  {
    no: "03",
    title: "가능 범위와 조건 안내",
    body: "진행 가능 여부와 필요한 절차, 조건을 안내합니다. 확인되지 않은 내용은 확정된 것처럼 말하지 않습니다.",
    points: ["가능 여부 먼저 확인", "조건은 진행 전에 확정", "대안이 있으면 함께 안내"],
  },
  {
    no: "04",
    title: "동의 후 진행",
    body: "안내드린 조건을 확인하고 동의하신 경우에만 다음 단계를 진행합니다. 결제가 필요한 경우 금액과 방법을 다시 확인합니다.",
    points: ["조건 확인 후 진행", "결제 전 금액 재확인", "상담 채널에 기록"],
  },
  {
    no: "05",
    title: "결과 안내와 사후 확인",
    body: "진행 결과와 사용 시 유의사항을 정리해 안내합니다. 이후에도 같은 상담 채널에서 이어서 문의하실 수 있습니다.",
    points: ["전달 방법 안내", "사용 기간·유의사항 정리", "사후 문의도 같은 채널"],
  },
];

const prepare = [
  ["무엇을", "상품권 종류 또는 게임·아이템"],
  ["얼마나", "금액 또는 장수"],
  ["어떻게", "휴대폰 결제 · 카드 · 정산"],
  ["언제", "사용 예정일 또는 진행 희망 시점"],
];

const mistakes = [
  {
    title: "유효기간을 나중에 확인하는 경우",
    body: "상품권은 사용 기간이 지나면 처리 방식이 달라집니다. 상담 전에 유효기간과 사용 이력을 확인해 두면 진행이 빠릅니다.",
  },
  {
    title: "한도와 조건을 모르고 진행하는 경우",
    body: "휴대폰 결제 한도와 카드 승인 조건은 미리 확인할 수 있습니다. 가능한 범위를 먼저 아는 것이 안전합니다.",
  },
  {
    title: "상담 채널을 확인하지 않는 경우",
    body: "상담은 이 사이트의 채널톡 버튼으로만 시작합니다. 다른 경로로 접근한 링크나 개인 연락처에는 정보를 남기지 마세요.",
  },
];

const safety = [
  {
    title: "먼저 입금을 요구하지 않습니다",
    body: "조건 확인 전에 금액을 먼저 보내달라고 요구하지 않습니다. 조건과 절차를 확인한 뒤 안내드립니다.",
  },
  {
    title: "필요한 정보만 확인합니다",
    body: "상담에 필요한 이름과 연락처, 진행에 필요한 최소한의 정보만 확인합니다. 주민등록번호나 비밀번호는 요구하지 않습니다.",
  },
  {
    title: "불법 목적 거래는 진행하지 않습니다",
    body: "타인 명의 결제, 부정하게 취득한 상품권, 재판매를 목적으로 한 대량 구매는 확인되는 즉시 진행하지 않습니다.",
  },
  {
    title: "기록이 남는 채널만 사용합니다",
    body: "조건과 진행 상황은 채널톡 대화에 남깁니다. 개인 메신저로만 진행하자는 요청은 받지 않습니다.",
  },
];

const HowToUse: React.FC = () => (
  <>
    <SEO
      title="이용 절차 — 상담 연결부터 진행 확인까지"
      description="고릴라티켓 이용 절차를 단계별로 정리했습니다. 상담 연결, 상품권·결제 방법 확인, 조건 안내, 진행, 사후 확인까지 한 번에 확인하세요."
      keywords="고릴라티켓 이용 방법,상품권 매입 절차,모바일 상품권 구매 절차,채널톡 상담"
    />
    <PageHero
      eyebrow="How to use"
      crumbs={[{ label: "이용 절차" }]}
      title={
        <>
          처음이라면,
          <br />이 순서만 기억하세요.
        </>
      }
      lead="상담 연결에서 끝나지 않고 조건 안내와 진행 확인까지 이어집니다. 각 단계에서 확인해야 할 내용을 정리했습니다."
    />

    <section className="border-b border-line bg-white">
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {prepare.map(([k, v], i) => (
            <div key={k} className="bg-frost px-6 py-7">
              <span className="num text-[10.5px] font-bold text-azure">0{i + 1}</span>
              <p className="mt-3 text-[1.02rem] font-semibold text-ink">{k}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[12px] text-ink-muted">
          이 네 가지만 있으면 첫 상담이 훨씬 짧아집니다. 나머지는 확인 과정에서 안내드립니다.
        </p>
      </div>
    </section>

    <section className="border-b border-line bg-frost">
      <div className="wrap py-20 md:py-28">
        <SectionHead eyebrow="Steps" title={<>다섯 단계</>} />
        <div className="mt-14 space-y-px overflow-hidden rounded-xl border border-line bg-line">
          {steps.map((s) => (
            <div key={s.no} className="grid gap-6 bg-white p-7 md:grid-cols-[100px_1.1fr_0.9fr] md:p-10">
              <span className="num text-[1.5rem] font-bold leading-none text-azure/30">{s.no}</span>
              <div>
                <h3 className="text-[1.18rem] font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 max-w-lg text-[13.5px] leading-[1.95] text-ink-soft">{s.body}</p>
              </div>
              <ul className="space-y-2 border-l-0 border-line pl-0 md:border-l md:pl-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-muted">
                    <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-azure" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-white">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHead eyebrow="Common mistakes" title={<>자주 하는 실수</>} />
          <div className="mt-10 divide-y divide-line border-y border-line">
            {mistakes.map((m) => (
              <div key={m.title} className="py-6">
                <h3 className="text-[1rem] font-semibold text-ink">{m.title}</h3>
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
                <h3 className="text-[1rem] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-frost">
      <div className="wrap flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <p className="mt-4 text-[1.3rem] font-bold tracking-[-0.02em] text-ink">
            절차가 정리됐다면, 이제 상담만 남았습니다.
          </p>
          <p className="mt-2 text-[13px] text-ink-muted">
            문의 {site.phone} · {site.hours}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ConsultButton label="채널톡 1:1 상담" size="lg" />
          <Link to="/faq" className="btn-outline min-h-[56px] px-7 text-[14.5px]">
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
    <div className="bg-white py-10">
      <div className="wrap">
        <ArrowLink to="/services/gift-card">이용 안내로 돌아가기</ArrowLink>
      </div>
    </div>
  </>
);

export default HowToUse;
