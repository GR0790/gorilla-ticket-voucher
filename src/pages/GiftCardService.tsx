import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const COM_URL = "https://xn--299a64rxvbk71bjne.com/services/gift-card";

const faqData = [
  {
    question: "상품권 현금화란 무엇인가요?",
    answer: "문화상품권, 해피머니, 도서문화상품권, 구글 기프트카드 등 보유한 상품권을 매입 업체에 판매해 현금으로 전환하는 것을 말합니다."
  },
  {
    question: "어떤 상품권을 현금화할 수 있나요?",
    answer: "문화상품권, 해피머니, 도서문화상품권, 신세계상품권, 구글 기프트카드 등 대부분의 모바일·지류 상품권이 매입 대상이 될 수 있습니다. 상품권 종류·유효기간에 따라 매입 가능 여부와 매입률이 달라질 수 있습니다."
  },
  {
    question: "상품권 매입률은 어떻게 정해지나요?",
    answer: "상품권 종류, 액면가, 유효기간, 시장 수요에 따라 매입 업체별 매입률이 다릅니다. 정확한 매입률은 이용하려는 업체에 직접 문의해 확인하는 것이 정확합니다."
  },
  {
    question: "핀번호만 있어도 현금화가 가능한가요?",
    answer: "모바일 상품권의 경우 핀번호(교환권 번호)만으로 매입이 가능한 경우가 많습니다. 다만 이미 사용되었거나 유효기간이 지난 핀번호는 매입이 불가능하므로 사전에 잔액과 유효기간을 확인해야 합니다."
  }
];

const GiftCardGuide: React.FC = () => {
  return (
    <>
      <SEO
        title="상품권 현금화란? 종류별 매입 안내 및 확인사항"
        description="문화상품권, 해피머니, 구글 기프트카드 등 상품권 현금화가 무엇인지, 매입 가능한 상품권 종류와 이용 전 확인해야 할 사항을 정리했습니다."
        keywords="상품권현금화란,문화상품권 매입,해피머니 매입,구글기프트카드 현금화,상품권 핀번호 매입"
        faqItems={faqData}
        pageType="service"
      />

      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-orange-50 to-amber-100 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              🎫 상품권 현금화 이용가이드
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              상품권 현금화란?<br />
              <span className="text-orange-700">매입 가능한 상품권 종류와 확인사항</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              문화상품권·해피머니·구글 기프트카드 등 각종 상품권 매입의 기본
              개념과 이용 전 확인해야 할 사항을 정리했습니다.
            </p>
            <div className="bg-white border-2 border-orange-200 rounded-xl p-5 max-w-xl mx-auto text-left">
              <p className="text-gray-700 text-sm">
                💡 이 페이지는 정보 제공을 위한 이용가이드입니다. 실제 매입 문의는{" "}
                <a href={COM_URL} target="_blank" rel="noopener" className="text-orange-700 font-semibold underline">
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
              매입 가능한 상품권 종류
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🎁", title: "문화상품권", desc: "모바일 문화상품권, 컬쳐랜드 상품권" },
                { icon: "💰", title: "해피머니", desc: "해피머니 모바일 상품권" },
                { icon: "📚", title: "도서문화상품권", desc: "통합 도서문화상품권" },
                { icon: "🛍️", title: "구글 기프트카드", desc: "구글플레이 기프트카드" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              ※ 실제 매입 가능 여부와 매입률은 상품권 종류·상태에 따라 다르며, 업체에 직접 문의해 확인해야 합니다.
            </p>
            <p className="text-center text-gray-600 text-sm mt-4">
              상품권을 소액결제로 구매하는 방법이 궁금하다면{" "}
              <Link to="/services/micropayment" className="text-orange-700 underline font-semibold">
                소액결제 현금화 가이드
              </Link>
              를 확인해 보세요.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              상품권 현금화 전 확인해야 할 사항
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0" />상품권의 잔액과 유효기간을 미리 확인하세요</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0" />매입 업체의 사업자등록 여부를 확인하세요</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0" />핀번호를 타인에게 노출하지 않도록 주의하세요</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0" />매입률은 상품권 종류에 따라 다르므로 사전 안내를 꼭 확인하세요</li>
              </ul>
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
              <Link to="/services/micropayment" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-orange-300 hover:text-orange-700 transition-colors">
                소액결제 현금화 가이드 →
              </Link>
              <Link to="/services/information-fee" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-orange-300 hover:text-orange-700 transition-colors">
                정보이용료 현금화 가이드 →
              </Link>
              <Link to="/services/credit-card" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-orange-300 hover:text-orange-700 transition-colors">
                신용카드 현금화 정보 →
              </Link>
              <Link to="/blog/4" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-orange-300 hover:text-orange-700 transition-colors">
                문화상품권 핀번호 관리 블로그 →
              </Link>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-orange-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">실제 상품권 매입이 필요하신가요?</h2>
              <p className="text-lg mb-6 opacity-90">이 페이지는 정보 제공용 가이드입니다. 실제 매입 문의는 고릴라티켓 공식 서비스 사이트에서 진행해 주세요.</p>
              <a href={COM_URL} target="_blank" rel="noopener" className="inline-block bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                🔗 고릴라티켓.com에서 매입 문의
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GiftCardGuide;
