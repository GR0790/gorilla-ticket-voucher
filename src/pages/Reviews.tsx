import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const COM_URL = "https://xn--299a64rxvbk71bjne.com";

const warningSignsData = [
  {
    icon: "⭐",
    title: "평점이 전부 5점 만점뿐",
    desc: "실제 서비스라면 배송 지연, 상담 응대 등 사소한 불만이 섞여 있는 것이 자연스럽습니다. 후기가 예외 없이 만점뿐이라면 조작 가능성을 의심해 보세요.",
  },
  {
    icon: "🗓️",
    title: "짧은 기간에 후기가 몰려 있음",
    desc: "특정 날짜나 며칠 사이에 후기 수백 건이 한꺼번에 등록되었다면, 실제 이용자가 아닌 일괄 작성된 후기일 가능성이 있습니다.",
  },
  {
    icon: "✍️",
    title: "문장 패턴이 비슷함",
    desc: "서로 다른 작성자라면서 문장 구조, 어투, 강조 표현(예: '3분만에', '최고예요')이 반복적으로 같다면 동일인이 작성했을 가능성이 있습니다.",
  },
  {
    icon: "📍",
    title: "특정 채널에만 후기가 몰려 있음",
    desc: "자사 홈페이지에만 후기가 있고, 제3자 플랫폼이나 커뮤니티에는 언급이 전혀 없다면 교차 검증이 어려운 상태입니다.",
  },
  {
    icon: "🚫",
    title: "부정적 후기·문제 제기가 전무함",
    desc: "실제 이용자가 많은 서비스라면 개선 요청이나 아쉬운 점을 언급하는 후기가 일부라도 존재하는 것이 자연스럽습니다.",
  },
];

const faqData = [
  {
    question: "후기가 많으면 무조건 믿을 수 있는 업체인가요?",
    answer: "후기의 '양'보다 '출처의 다양성'과 '내용의 구체성'이 훨씬 중요합니다. 한 곳에만 몰린 후기 수백 건보다, 여러 독립적인 채널에서 발견되는 소수의 구체적인 후기가 더 신뢰할 수 있는 신호입니다.",
  },
  {
    question: "어디에서 교차 검증을 할 수 있나요?",
    answer: "포털 검색, 커뮤니티, SNS 등 업체가 직접 관리하지 않는 제3자 채널에서 상호명을 검색해 보는 것이 가장 기본적인 방법입니다. 동일한 계정이나 패턴이 반복되는지도 함께 살펴보세요.",
  },
  {
    question: "사업자등록번호가 있으면 후기를 안 봐도 되나요?",
    answer: "아닙니다. 사업자등록은 최소한의 조건일 뿐이며, 실제 거래 경험에 대한 정보는 후기·평판 검증을 통해서만 확인할 수 있습니다. 두 가지를 함께 확인하는 것이 안전합니다.",
  },
];

const Reviews: React.FC = () => {
  return (
    <>
      <SEO
        title="후기, 어떻게 걸러서 봐야 할까? 가짜 후기 구별법"
        description="현금화 업체를 알아볼 때 후기를 어떻게 검증해야 하는지, 조작된 후기의 5가지 특징과 신뢰할 수 있는 후기를 찾는 방법을 정리했습니다."
        keywords="후기 구별법,가짜후기,조작후기,업체후기 검증,현금화 후기 신뢰성"
        faqItems={faqData}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              ⭐ 후기 검증 이용가이드
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              후기, 어떻게 걸러서 봐야 할까?<br />
              <span className="text-emerald-700">가짜 후기 구별하는 법</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              현금화 업체를 알아볼 때 후기는 중요한 판단 근거지만, 조작된
              후기도 적지 않습니다. 진짜 후기와 가짜 후기를 구별하는 방법을
              정리했습니다.
            </p>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-5 max-w-xl mx-auto text-left">
              <p className="text-gray-700 text-sm">
                💡 이 페이지는 정보 제공을 위한 이용가이드입니다. 실제 서비스
                후기·상담은{" "}
                <a href={COM_URL} target="_blank" rel="noopener" className="text-emerald-700 font-semibold underline">
                  고릴라티켓.com
                </a>
                에서 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              왜 후기 검증이 중요한가
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                현금화 서비스는 표준화된 등급이나 공인 인증 제도가 없다 보니,
                소비자들은 후기와 평판에 크게 의존해 업체를 선택하는 경향이
                있습니다. 그런데 바로 이 점을 악용해 <strong>가짜 후기로
                신뢰도를 조작</strong>하는 사례도 적지 않습니다. 후기를 볼 때
                몇 가지 기준만 알고 있어도 조작된 정보에 속을 가능성을 크게
                줄일 수 있습니다.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              조작된 후기의 5가지 특징
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {warningSignsData.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              신뢰할 수 있는 후기를 찾는 방법
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li><strong>여러 채널에서 교차 확인하세요.</strong> 업체 홈페이지뿐 아니라 포털 검색, 커뮤니티, SNS 등 독립적인 경로에서도 상호명을 검색해 보세요.</li>
                <li><strong>구체적인 내용이 담긴 후기를 우선하세요.</strong> "좋아요", "최고예요" 같은 짧은 감탄사보다, 진행 절차나 소요 시간 등 구체적 경험이 담긴 후기가 신뢰도가 높습니다.</li>
                <li><strong>부정적인 후기의 존재 여부도 확인하세요.</strong> 아쉬운 점이나 개선 요청이 전혀 없는 것이 오히려 부자연스러운 신호일 수 있습니다.</li>
                <li><strong>작성 시점의 분포를 살펴보세요.</strong> 특정 기간에만 후기가 몰려 있다면 일괄 작성 가능성을 의심해 보세요.</li>
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
              <Link to="/blog/1" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                안전한 업체 구별법 체크리스트 →
              </Link>
              <Link to="/faq" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                전체 FAQ 보기 →
              </Link>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-emerald-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">실제 이용 후기가 궁금하신가요?</h2>
              <p className="text-lg mb-6 opacity-90">이 페이지는 정보 제공용 가이드입니다. 실제 서비스 후기와 상담은 고릴라티켓 공식 서비스 사이트에서 확인해 주세요.</p>
              <a href={COM_URL} target="_blank" rel="noopener" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                🔗 고릴라티켓.com 방문하기
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Reviews;
