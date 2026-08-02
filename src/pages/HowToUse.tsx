import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";

const COM_URL = "https://xn--299a64rxvbk71bjne.com";

const faqData = [
  {
    question: "업체에 연락하기 전에 무엇부터 확인해야 하나요?",
    answer: "본인의 결제 한도(소액결제·정보이용료·카드 한도 등)를 먼저 확인하고, 업체의 사업자등록 여부와 수수료 안내 방식을 살펴보는 것이 첫 단계입니다.",
  },
  {
    question: "상담 중에 절대 알려주면 안 되는 정보가 있나요?",
    answer: "계좌 비밀번호, 공동인증서(구 공인인증서) 비밀번호, 카드 CVC 등은 정상적인 절차에서 요구되지 않는 정보입니다. 요구받는다면 진행을 중단하세요.",
  },
  {
    question: "거래가 끝난 뒤에도 확인할 게 있나요?",
    answer: "네. 실제 입금액이 사전에 안내받은 금액과 일치하는지, 결제 내역이 명세서에 정확히 반영되었는지 반드시 확인하는 것이 좋습니다.",
  },
];

const HowToUse: React.FC = () => {
  return (
    <>
      <SEO
        title="처음 이용하기 전 준비사항 체크리스트"
        description="현금화 서비스를 처음 이용하기 전 미리 확인해야 할 정보, 업체와 상담 시 점검할 사항, 거래 기록을 남기는 방법과 사후 확인 절차를 정리한 준비 가이드입니다."
        keywords="현금화 이용전 준비사항,상담 체크리스트,거래기록 남기기,현금화 준비물"
        faqItems={faqData}
      />
      {/* 본문의 1~4단계 체크리스트와 1:1로 매칭되는 HowTo 스키마 */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "현금화 서비스 이용 전 준비사항 체크리스트",
          "step": [
            {
              "@type": "HowToStep",
              "name": "1단계 — 상담 전에 준비할 것",
              "text": "본인의 결제 한도를 미리 확인하고, 희망 금액과 목적을 정리한 뒤, 업체의 사업자등록 여부와 후기를 검증합니다.",
            },
            {
              "@type": "HowToStep",
              "name": "2단계 — 상담 중 반드시 확인할 것",
              "text": "정확한 수수료율과 실지급액을 문서로 안내받고, 처리 예상 시간을 확인하며, 선입금·보증금 요구가 없는지 확인합니다.",
            },
            {
              "@type": "HowToStep",
              "name": "3단계 — 거래 중 기록을 남기세요",
              "text": "상담 대화 내용, 안내받은 수수료·금액, 계좌 정보를 캡처하고 결제 승인 문자 등 모든 거래 기록을 보관합니다.",
            },
            {
              "@type": "HowToStep",
              "name": "4단계 — 거래 후 확인할 것",
              "text": "실제 입금액이 안내받은 금액과 일치하는지, 다음 달 청구서에 결제 내역이 정확히 반영되었는지 확인합니다.",
            },
          ],
        })}
      </script>

      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <Breadcrumb items={[{ label: "고릴라티켓", path: "/" }, { label: "이용 전 준비사항" }]} />
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              ✅ 이용 전 준비 이용가이드
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              처음 이용하기 전<br />
              <span className="text-emerald-700">준비사항 체크리스트</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              어떤 업체를 이용하든, 상담을 시작하기 전 미리 준비하고
              확인해 두면 좋은 것들을 단계별로 정리했습니다.
            </p>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-5 max-w-xl mx-auto text-left">
              <p className="text-gray-700 text-sm">
                💡 이 페이지는 정보 제공을 위한 이용가이드입니다. 실제 상담·신청은{" "}
                <a href={COM_URL} target="_blank" rel="noopener" className="text-emerald-700 font-semibold underline">
                  고릴라티켓.com
                </a>
                에서 진행하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              1단계 — 상담 전에 준비할 것
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" />본인의 결제 한도(소액결제·정보이용료·신용카드 한도 등)를 미리 확인해 두세요. 확인 방법은 <Link to="/services/micropayment" className="text-emerald-700 underline">소액결제 가이드</Link>를 참고하세요.</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" />희망하는 현금화 금액과 목적을 명확히 정리해 두면 상담이 훨씬 수월합니다.</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" />업체의 사업자등록 여부와 후기를 먼저 검증하세요. <Link to="/blog/1" className="text-emerald-700 underline">업체 구별법 체크리스트</Link>를 참고하세요.</li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              2단계 — 상담 중 반드시 확인할 것
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" /><strong>정확한 수수료율과 실지급액</strong>을 결제 전에 문서(채팅 등)로 안내받으세요.</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" /><strong>처리 예상 시간</strong>을 미리 확인해 급한 상황에 맞는지 판단하세요.</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" />업체가 <strong>선입금이나 보증금</strong>을 요구하지 않는지 확인하세요. 요구한다면 진행을 중단해야 합니다.</li>
              </ul>
              <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-800 text-sm font-semibold mb-1">⚠️ 절대 알려주면 안 되는 정보</p>
                <p className="text-red-700 text-sm">계좌 비밀번호, 공동인증서 비밀번호, 카드 CVC, 주민등록번호 전체 등은 정상적인 절차에서 요구되지 않습니다.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              3단계 — 거래 중 기록을 남기세요
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" />상담 대화 내용, 안내받은 수수료·금액, 업체의 계좌 정보를 캡처해 보관하세요.</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" />결제 승인 문자, 이체 내역 등 금전 거래와 관련된 모든 기록을 보관하세요.</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" />분쟁이 생겼을 때 이 기록들이 중요한 증거가 됩니다. 자세한 대처법은 <Link to="/blog/3" className="text-emerald-700 underline">분쟁·사기 대처법 가이드</Link>를 참고하세요.</li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              4단계 — 거래 후 확인할 것
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>실제 입금액이 사전에 안내받은 금액과 일치하는지 확인하세요.</li>
                <li>다음 달 청구서(요금 명세서)에서 결제 내역이 정확히 반영되었는지 확인하세요.</li>
                <li>불일치가 있다면 즉시 업체와 통신사 양쪽에 문의하세요.</li>
              </ol>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              자주 묻는 질문 (FAQ)
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="space-y-6">
                {faqData.map((item, index) => (
                  <div key={index} className={index < faqData.length - 1 ? "border-b border-gray-200 pb-5" : ""}>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Q. {item.question}</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">함께 보면 좋은 가이드</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/safety" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                개인정보 보호 수칙 →
              </Link>
              <Link to="/reviews" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                후기 검증하는 법 →
              </Link>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-emerald-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">준비가 끝나셨다면, 다음 단계</h2>
              <p className="text-lg mb-6 opacity-90">실제 상담 및 신청은 고릴라티켓 공식 서비스 사이트에서 진행하실 수 있습니다.</p>
              <a href={COM_URL} target="_blank" rel="noopener" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                🔗 고릴라티켓.com에서 상담 신청
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HowToUse;
