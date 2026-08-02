import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";

const COM_URL = "https://xn--299a64rxvbk71bjne.com/services/credit-card";

const faqData = [
  {
    question: "신용카드 현금화란 무엇인가요?",
    answer: "신용카드의 결제(할부) 한도를 활용해 현금을 마련하는 방식을 말합니다. 흔히 '카드깡'과 혼동되지만, 정식 가맹점을 통한 정상적인 상품·서비스 결제 방식과, 위장 가맹점을 통한 불법적인 현금 융통(카드깡)은 법적으로 명확히 다릅니다."
  },
  {
    question: "신용카드 현금화와 '카드깡'은 어떻게 다른가요?",
    answer: "카드깡은 실제 상품·서비스 거래 없이 가짜 매출을 일으켜 현금을 받는 여신전문금융업법 위반 행위입니다. 반드시 실제 재화·용역 거래가 수반되는 정식 절차인지 확인해야 하며, 위장 거래는 형사처벌 대상이 될 수 있습니다."
  },
  {
    question: "어떤 카드사 카드를 이용할 수 있나요?",
    answer: "삼성·현대·롯데·국민·신한·우리카드 등 국내 주요 카드사 대부분이 대상이 될 수 있으나, 카드 상태(한도, 연체 여부 등)에 따라 이용 가능 여부가 달라질 수 있습니다."
  },
  {
    question: "신용카드 현금화 이용 시 무엇을 꼭 확인해야 하나요?",
    answer: "① 실제 재화·용역 거래가 수반되는 정식 매입 방식인지, ② 업체의 사업자등록 여부, ③ 수수료율이 사전에 명확히 안내되는지를 반드시 확인해야 합니다."
  }
];

const CreditCardGuide: React.FC = () => {
  return (
    <>
      <SEO
        title="신용카드 현금화란? 카드깡과의 차이, 확인해야 할 사항"
        description="신용카드 현금화가 무엇인지, 불법 카드깡과 어떻게 다른지, 이용 전 반드시 확인해야 할 사항을 정리한 정보 가이드입니다."
        keywords="신용카드현금화란,카드깡 차이,신용카드 현금화 주의사항,카드 한도 현금화"
        faqItems={faqData}
        pageType="service"
      />

      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-50 to-violet-100 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <Breadcrumb items={[{ label: "고릴라티켓", path: "/" }, { label: "신용카드 현금화" }]} />
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              💳 신용카드 현금화 이용가이드
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              신용카드 현금화란?<br />
              <span className="text-purple-700">'카드깡'과 무엇이 다를까요</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              신용카드 결제 한도 현금화의 개념과 불법 카드깡과의 차이, 이용 전
              꼭 확인해야 할 사항을 정리했습니다.
            </p>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-5 max-w-xl mx-auto text-left">
              <p className="text-gray-700 text-sm">
                💡 이 페이지는 정보 제공을 위한 이용가이드입니다. 실제 상담·신청은{" "}
                <a href={COM_URL} target="_blank" rel="noopener" className="text-purple-700 font-semibold underline">
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
              신용카드 현금화, 정확히 알아야 하는 이유
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                신용카드 현금화는 카드 결제 한도를 활용해 현금을 마련하는
                방식을 통칭하는 표현입니다. 다만 이 용어가 <strong>불법 카드깡</strong>과
                혼용되어 쓰이는 경우가 많아 주의가 필요합니다.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
                <p className="text-red-800 font-semibold mb-2">⚠️ 불법 카드깡이란?</p>
                <p className="text-red-700 text-sm leading-relaxed">
                  실제 상품·서비스 거래 없이 가짜 매출 전표만 발생시켜 현금을
                  받는 행위로, 여신전문금융업법에 따라 처벌 대상이 됩니다.
                  카드사 이용정지·강제해지 및 형사처벌로 이어질 수 있습니다.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                반드시 실제 재화·용역 거래가 수반되는 정식 매입 절차를 거치는
                업체인지, 사업자등록이 되어 있는지 확인 후 이용해야 합니다.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                실제 재화 거래가 수반되는 대표적인 예시로는{" "}
                <Link to="/services/gift-card" className="text-purple-700 underline font-semibold">
                  상품권 매입 방식
                </Link>
                이 있습니다.
              </p>
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
              <Link to="/services/gift-card" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-purple-300 hover:text-purple-700 transition-colors">
                상품권 현금화 안내 →
              </Link>
              <Link to="/services/micropayment" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-purple-300 hover:text-purple-700 transition-colors">
                소액결제 현금화 가이드 →
              </Link>
              <Link to="/services/information-fee" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-purple-300 hover:text-purple-700 transition-colors">
                정보이용료 현금화 가이드 →
              </Link>
              <Link to="/faq" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-purple-300 hover:text-purple-700 transition-colors">
                전체 FAQ 보기 →
              </Link>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-purple-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">실제 신용카드 현금화 상담이 필요하신가요?</h2>
              <p className="text-lg mb-6 opacity-90">이 페이지는 정보 제공용 가이드입니다. 실제 상담·신청은 고릴라티켓 공식 서비스 사이트에서 진행해 주세요.</p>
              <a href={COM_URL} target="_blank" rel="noopener" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                🔗 고릴라티켓.com에서 상담 신청
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CreditCardGuide;
