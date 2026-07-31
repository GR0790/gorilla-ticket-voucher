import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const COM_URL = "https://xn--299a64rxvbk71bjne.com/services/information-fee";

const faqData = [
  {
    question: "정보이용료(콘텐츠이용료) 현금화란 무엇인가요?",
    answer: "구글 플레이스토어, 원스토어 등에서 앱·게임 아이템·콘텐츠를 구매할 때 사용하는 정보이용료(콘텐츠이용료) 한도를 활용해 현금을 마련하는 방식입니다. 소액결제와는 별개의 한도로 운영됩니다."
  },
  {
    question: "정보이용료와 소액결제의 차이점은 무엇인가요?",
    answer: "소액결제는 휴대폰 번호 자체에 부여된 결제 한도이며, 정보이용료는 구글 플레이스토어 같은 앱 마켓 내에서 사용하는 별도의 한도입니다. 통신사 앱에서 각각 별도로 한도를 확인할 수 있습니다."
  },
  {
    question: "정보이용료 한도는 어떻게 확인하나요?",
    answer: "구글 플레이스토어 설정 → 결제 및 구독 → 결제 수단 메뉴에서 확인 가능하며, 통신사 고객센터를 통해서도 조회할 수 있습니다."
  },
  {
    question: "정보이용료 현금화도 미납 시 문제가 되나요?",
    answer: "정보이용료 역시 휴대폰 요금과 합산 청구되므로, 연체 시 소액결제와 마찬가지로 신용점수에 영향을 줄 수 있습니다. 납부 기한을 지키는 것이 중요합니다."
  }
];

const InformationFeeGuide: React.FC = () => {
  return (
    <>
      <SEO
        title="정보이용료(콘텐츠이용료) 현금화란? 소액결제와의 차이 정리"
        description="정보이용료·콘텐츠이용료 현금화가 무엇인지, 소액결제와 어떻게 다른지, 한도 확인 방법과 이용 시 유의사항까지 정리한 이용가이드입니다."
        keywords="정보이용료란,콘텐츠이용료란,정보이용료 한도 확인,정보이용료 소액결제 차이,구글 정보이용료"
        faqItems={faqData}
        pageType="service"
      />

      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              💻 정보이용료 현금화 이용가이드
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              정보이용료(콘텐츠이용료) 현금화란?<br />
              <span className="text-blue-700">소액결제와 무엇이 다를까요</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              구글 플레이스토어·원스토어 등에서 사용하는 정보이용료 한도의
              개념과 확인 방법, 소액결제와의 차이를 정리했습니다.
            </p>
            <div className="bg-white border-2 border-blue-200 rounded-xl p-5 max-w-xl mx-auto text-left">
              <p className="text-gray-700 text-sm">
                💡 이 페이지는 정보 제공을 위한 이용가이드입니다. 실제 상담·신청은{" "}
                <a href={COM_URL} target="_blank" rel="noopener" className="text-blue-700 font-semibold underline">
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
              정보이용료란 무엇인가요?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                정보이용료는 휴대폰을 통해 각종 디지털 콘텐츠·정보 서비스를
                이용할 때 부과되는 요금으로, 다음 달 휴대폰 요금과 함께
                청구됩니다. <strong>소액결제</strong>가 휴대폰 번호 자체에 부여된
                결제 한도라면, <strong>정보이용료</strong>는 구글 플레이스토어
                같은 앱 마켓 내에서 사용하는 별도의 한도라는 점이 다릅니다.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />모든 통신사에서 정보이용료 한도 제공 (SKT·KT·LGU+)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />소액결제와 별도 한도로 운영됨</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />연체 시 통신 요금 미납과 동일하게 취급됨</li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              정보이용료 한도 확인 방법
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>구글 플레이스토어 앱 → 프로필 → 결제 및 구독 → 결제 수단</li>
                <li>통신사 결제 항목에서 월 한도 및 사용 내역 확인</li>
                <li>통신사 고객센터(SKT 114 / KT 100 / LGU+ 101)로 문의해 재확인</li>
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
              <Link to="/services/micropayment" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-colors">
                소액결제 현금화 가이드 →
              </Link>
              <Link to="/faq" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-colors">
                전체 FAQ 보기 →
              </Link>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-blue-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">실제 정보이용료 현금화가 필요하신가요?</h2>
              <p className="text-lg mb-6 opacity-90">이 페이지는 정보 제공용 가이드입니다. 실제 상담·신청은 고릴라티켓 공식 서비스 사이트에서 진행해 주세요.</p>
              <a href={COM_URL} target="_blank" rel="noopener" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                🔗 고릴라티켓.com에서 상담 신청
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default InformationFeeGuide;
