import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO"; // [추가됨]

const COM_URL = "https://xn--299a64rxvbk71bjne.com";

const GuideHeroSection: React.FC = () => (
  <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-12 md:py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <div className="mb-4 flex justify-center lg:justify-start">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-2">
              📚 소액결제·정보이용료 현금화 정보 가이드 허브
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-emerald-700">소액결제현금화</span>,
            <span className="text-blue-700"> 정보이용료현금화</span>
            <br />
            무엇이고 어떻게 이용하나요?
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            고릴라티켓 이용가이드는 소액결제·정보이용료·신용카드·상품권 현금화의
            <strong> 개념, 한도 확인 방법, 절차, 주의사항</strong>을 정리해 드리는
            정보 사이트입니다. 실제 서비스 신청은{" "}
            <a
              href={COM_URL}
              target="_blank"
              rel="noopener"
              className="text-emerald-700 font-semibold underline hover:text-emerald-800"
            >
              고릴라티켓.com
            </a>
            에서 진행하실 수 있습니다.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
            <Link
              to="/faq"
              className="inline-flex items-center bg-white border-2 border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              ❓ 자주 묻는 질문 보기
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center bg-white border-2 border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              📖 가이드 블로그 보기
            </Link>
            <a
              href={COM_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              🔗 실제 서비스 신청하기 (.com)
            </a>
          </div>

          <p className="text-sm text-gray-500">
            ※ 본 사이트(.net)는 정보 제공을 목적으로 하는 이용가이드이며, 실제
            상담·거래는 고릴라티켓.com에서 진행됩니다.
          </p>
        </div>

        <div className="flex-shrink-0 lg:w-1/3 order-1 lg:order-2">
          <div className="w-56 h-56 lg:w-72 lg:h-72 mx-auto">
            <img
              src="/gorilla-mascot.webp"
              alt="고릴라티켓 이용가이드 마스코트"
              className="w-full h-full object-cover rounded-2xl drop-shadow-2xl border-4 border-white shadow-lg"
              width="288"
              height="288"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GuideTopicsSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          주제별 이용가이드
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
          각 결제 수단이 무엇이고, 한도는 어떻게 확인하며, 현금화 절차와 유의점은
          무엇인지 항목별로 정리했습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <Link
          to="/services/micropayment"
          className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 block"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              소액결제 현금화 가이드
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              휴대폰 소액결제 한도란 무엇이고 어떻게 확인·이용하는지 개념부터
              절차까지 정리했습니다.
            </p>
            <span className="text-emerald-700 font-semibold hover:text-emerald-800 transition-colors">
              가이드 읽기 →
            </span>
          </div>
        </Link>

        <Link
          to="/services/information-fee"
          className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 block"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              정보이용료 현금화 가이드
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              구글·앱마켓 정보이용료(콘텐츠이용료)와 소액결제의 차이, 한도 관리
              방법을 안내합니다.
            </p>
            <span className="text-emerald-700 font-semibold hover:text-emerald-800 transition-colors">
              가이드 읽기 →
            </span>
          </div>
        </Link>

        <Link
          to="/services/credit-card"
          className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 block"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              신용카드 현금화 정보
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              신용카드 결제 한도 현금화가 무엇인지, 카드깡과의 차이, 확인해야 할
              사항을 정리했습니다.
            </p>
            <span className="text-emerald-700 font-semibold hover:text-emerald-800 transition-colors">
              가이드 읽기 →
            </span>
          </div>
        </Link>

        <Link
          to="/services/gift-card"
          className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 block"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎫</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              상품권 현금화 안내
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              문화상품권·해피머니 등 모바일 상품권 매입 시 확인할 사항을 정리한
              안내 페이지입니다.
            </p>
            <span className="text-emerald-700 font-semibold hover:text-emerald-800 transition-colors">
              가이드 읽기 →
            </span>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

const BlogHighlightSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          이용가이드 블로그
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
          한도 확인, 청구서 읽는 법, 안전 이용 수칙 등 실용적인 정보를 꾸준히
          업데이트합니다.
        </p>
      </div>
      <div className="text-center">
        <Link
          to="/blog"
          className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
        >
          📖 블로그 글 전체 보기 →
        </Link>
      </div>
    </div>
  </section>
);

const FAQTeaserSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-white">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          자주 묻는 질문
        </h2>
      </div>
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
          <p className="font-semibold text-gray-900 mb-1">Q. 소액결제현금화는 합법인가요?</p>
          <p className="text-gray-600 text-sm">
            정식 사업자 등록 업체를 통한 소액결제 한도 활용은 불법이 아닙니다. 다만
            미등록·과대광고 업체는 피해로 이어질 수 있어 주의가 필요합니다.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
          <p className="font-semibold text-gray-900 mb-1">Q. 이 사이트(.net)에서 바로 신청할 수 있나요?</p>
          <p className="text-gray-600 text-sm">
            이 사이트는 정보 제공용 가이드입니다. 실제 상담 신청은{" "}
            <a href={COM_URL} target="_blank" rel="noopener" className="text-emerald-700 underline">
              고릴라티켓.com
            </a>
            에서 진행해 주세요.
          </p>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link to="/faq" className="text-emerald-700 font-semibold hover:underline">
          FAQ 전체 보기 →
        </Link>
      </div>
    </div>
  </section>
);

const NextStepSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-emerald-700">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
        가이드를 다 읽으셨다면, 다음 단계
      </h2>
      <p className="text-lg md:text-xl text-emerald-50 mb-8 max-w-3xl mx-auto leading-relaxed">
        실제 소액결제·정보이용료·신용카드·상품권 현금화 상담 및 신청은
        고릴라티켓 공식 서비스 사이트에서 진행하실 수 있습니다.
      </p>
      <a
        href={COM_URL}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center bg-white text-emerald-700 px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        🔗 고릴라티켓.com 방문하기
      </a>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="소액결제현금화·정보이용료현금화 이용가이드 총정리"
        description="소액결제현금화, 정보이용료현금화, 신용카드현금화, 상품권현금화가 무엇인지부터 한도 확인 방법, 이용 절차, 안전 이용 수칙까지 정리한 고릴라티켓 이용가이드입니다."
        keywords="소액결제현금화 가이드,정보이용료현금화란,소액결제 한도 확인 방법,현금화 안전하게 이용하는법,고릴라티켓 이용가이드"
        pageType="home"
      />
      <GuideHeroSection />
      <GuideTopicsSection />
      <BlogHighlightSection />
      <FAQTeaserSection />
      <NextStepSection />
    </>
  );
};

export default Home;
