import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const COM_URL = "https://xn--299a64rxvbk71bjne.com/services/micropayment";

const faqData = [
  {
    question: "소액결제 현금화란 무엇인가요?",
    answer: "소액결제 현금화는 휴대폰 소액결제 한도를 이용해 현금을 마련하는 서비스입니다. SKT, KT, LGU+ 통신사 가입자라면 누구나 이용 가능하며, 다음 달 휴대폰 요금에 합산 청구됩니다."
  },
  {
    question: "소액결제 현금화는 일반적으로 어떤 절차로 진행되나요?",
    answer: "①업체 상담 신청 → ②소액결제 한도 확인 → ③본인인증 → ④입금 순으로 진행되는 것이 일반적입니다. 업체별로 처리 속도와 절차는 다를 수 있습니다."
  },
  {
    question: "소액결제 현금화 수수료(지급률)는 어떻게 정해지나요?",
    answer: "업체마다 수수료율이 다르며, 통상 결제 금액의 일정 비율을 수수료로 공제한 뒤 나머지를 지급하는 방식입니다. 정확한 수수료율과 지급 조건은 이용하려는 업체에 직접 문의해 확인하는 것이 정확합니다."
  },
  {
    question: "모든 통신사(SKT, KT, LGU+)에서 소액결제 현금화가 가능한가요?",
    answer: "SKT(SK텔레콤), KT(케이티), LGU+(LG유플러스) 3대 통신사 모두 소액결제 서비스를 제공합니다. 알뜰폰(MVNO) 이용자는 통신사 정책에 따라 가능 여부가 다를 수 있습니다."
  },
  {
    question: "미납이나 정책 제한이 있으면 소액결제 현금화가 불가능한가요?",
    answer: "업체별로 미납·정책 제한 상황에 대한 대응 가능 여부가 다릅니다. 거절당한 경험이 있다면 다른 업체의 조건을 비교해 상담해 보시는 것을 권장합니다."
  },
  {
    question: "소액결제 한도는 어떻게 확인하나요?",
    answer: "소액결제 한도는 ①통신사 앱(T월드, KT닷컴, U+앱) ②*#요금조회 ③통신사 고객센터(SKT 114, KT 100, LGU+ 101)를 통해 직접 확인할 수 있습니다."
  },
  {
    question: "소액결제 현금화는 안전한가요? 합법인가요?",
    answer: "정식 사업자 등록을 마친 업체를 통한 소액결제 한도 활용 자체는 불법이 아닙니다. 다만 미등록 업체, 선입금 요구, 과도한 개인정보 요구가 있는 곳은 사기 위험이 있으므로 반드시 업체의 사업자등록 여부를 확인하고 이용하시기 바랍니다."
  },
  {
    question: "소액결제 현금화 후 신용점수에 영향이 있나요?",
    answer: "휴대폰 소액결제 자체는 일반적으로 신용점수에 영향을 주지 않습니다. 다만 소액결제 요금을 연체하면 신용점수에 불이익이 생길 수 있으므로 납부 기한을 지키는 것이 중요합니다."
  }
];

const MicropaymentGuide: React.FC = () => {
  return (
    <>
      <SEO
        title="소액결제 현금화란? 개념·한도 확인·이용 절차 총정리"
        description="소액결제 현금화가 무엇인지부터 SKT·KT·LGU+ 한도 확인 방법, 일반적인 이용 절차, 안전하게 이용하기 위한 체크포인트까지 정리한 이용가이드입니다."
        keywords="소액결제 현금화란,소액결제 한도 확인 방법,소액결제 현금화 절차,소액결제 현금화 안전하게 이용하는법,SKT 소액결제 한도,KT 소액결제 한도,LGU+ 소액결제 한도"
        faqItems={faqData}
        pageType="service"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero: 가이드 톤 */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              📱 소액결제 현금화 이용가이드
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              소액결제 현금화란?<br />
              <span className="text-emerald-700">개념부터 한도 확인, 이용 절차까지</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              SKT·KT·LGU+ 소액결제 한도가 무엇이고 어떻게 확인하는지, 현금화를
              이용하기 전 알아두어야 할 절차와 유의사항을 정리했습니다.
            </p>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-5 max-w-xl mx-auto text-left">
              <p className="text-gray-700 text-sm">
                💡 이 페이지는 정보 제공을 위한 이용가이드입니다. 실제 소액결제
                현금화 상담·신청은{" "}
                <a href={COM_URL} target="_blank" rel="noopener" className="text-emerald-700 font-semibold underline">
                  고릴라티켓.com
                </a>
                에서 진행하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">

          {/* 소액결제 현금화란 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              소액결제 현금화란 무엇인가요?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    <strong>소액결제 현금화</strong>란 SKT, KT, LGU+ 통신사에서
                    제공하는 <strong>휴대폰 소액결제 한도</strong>를 활용해
                    현금을 마련하는 방식을 말합니다. 소액결제로 모바일 상품권 등
                    디지털 상품을 구매한 뒤, 이를 매입 업체에 판매하여 현금을
                    받는 구조가 일반적입니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    이용 전에는 반드시 업체의 <strong>정식 사업자등록 여부</strong>,
                    수수료율, 후기 등을 비교해 확인하는 것이 안전한 이용의
                    핵심입니다.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 flex-shrink-0" />통신사 무관 이용 가능: SKT, KT, LGU+</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 flex-shrink-0" />업체별로 처리 속도·수수료율이 상이함</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 flex-shrink-0" />미납·정책 제한 대응 여부는 업체마다 다름</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 flex-shrink-0" />정식 사업자 등록 여부 확인이 안전 이용의 기본</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h3 className="font-bold text-emerald-800 mb-4 text-lg">📱 일반적인 진행 절차 3단계</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                      <div>
                        <p className="text-emerald-800 font-medium">상담 신청 &amp; 한도 확인</p>
                        <p className="text-emerald-700 text-sm">이용하려는 업체에 문의하여 한도를 확인합니다</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                      <div>
                        <p className="text-emerald-800 font-medium">본인 인증 진행</p>
                        <p className="text-emerald-700 text-sm">업체 안내에 따라 본인 확인 절차를 거칩니다</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                      <div>
                        <p className="text-emerald-800 font-medium">결제 확인 후 입금</p>
                        <p className="text-emerald-700 text-sm">지정 계좌로 현금이 입금됩니다</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 통신사별 소액결제 한도 확인 방법 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              통신사별 소액결제 한도 확인 방법
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">📡 SKT</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 기본 한도: 월 30만원~100만원 수준 (개인차 있음)</li>
                  <li>• T월드 앱에서 한도 확인 가능</li>
                  <li>• 고객센터: 114</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-4 text-center">📡 KT</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 기본 한도: 월 30만원~100만원 수준 (개인차 있음)</li>
                  <li>• KT닷컴·My KT 앱에서 한도 확인</li>
                  <li>• 고객센터: 100</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-700 mb-4 text-center">📡 LGU+</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 기본 한도: 월 30만원~100만원 수준 (개인차 있음)</li>
                  <li>• U+앱에서 소액결제 한도 확인</li>
                  <li>• 고객센터: 101</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
              <p className="text-yellow-800 text-sm">💡 <strong>한도 확인 방법:</strong> 통신사 앱 → 요금/결제 → 소액결제 항목에서 잔여 한도를 직접 확인하는 것이 가장 정확합니다.</p>
            </div>
          </section>

          {/* 안전하게 이용하기 위한 체크리스트 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              안전하게 이용하기 위한 체크리스트
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏢", title: "사업자등록 확인", desc: "업체의 정식 사업자등록번호가 명시되어 있는지 반드시 확인하세요." },
                { icon: "💰", title: "수수료 사전 확인", desc: "이용 전 정확한 수수료율과 지급액을 미리 안내받고 진행하세요." },
                { icon: "🔍", title: "후기·평판 비교", desc: "여러 업체의 후기와 평판을 비교해 신뢰할 수 있는 곳을 선택하세요." },
                { icon: "🚫", title: "과도한 요구 주의", desc: "선입금이나 과도한 개인정보를 요구하는 업체는 이용을 피하세요." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ 섹션 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              소액결제 현금화 자주 묻는 질문 (FAQ)
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="space-y-6">
                {faqData.map((item, index) => (
                  <div key={index} className={index < faqData.length - 1 ? "border-b border-gray-200 pb-5" : ""}>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                      Q. {item.question}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center bg-emerald-50 p-4 rounded-lg">
                <p className="text-emerald-800">
                  더 많은 질문은{" "}
                  <Link to="/faq" className="font-semibold hover:underline">자주 묻는 질문 전체 보기</Link>를 확인해주세요.
                </p>
              </div>
            </div>
          </section>

          {/* 관련 가이드 */}
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              함께 보면 좋은 가이드
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/services/information-fee" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                정보이용료 현금화 가이드 →
              </Link>
              <Link to="/services/credit-card" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                신용카드 현금화 정보 →
              </Link>
              <Link to="/blog" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                한도 확인 방법 블로그 →
              </Link>
            </div>
          </section>

          {/* Outbound CTA */}
          <section className="text-center">
            <div className="bg-emerald-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                실제 소액결제 현금화가 필요하신가요?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                이 페이지는 정보 제공용 가이드입니다. 실제 상담·신청은
                고릴라티켓 공식 서비스 사이트에서 진행해 주세요.
              </p>
              <a
                href={COM_URL}
                target="_blank"
                rel="noopener"
                className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                🔗 고릴라티켓.com에서 상담 신청
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MicropaymentGuide;
