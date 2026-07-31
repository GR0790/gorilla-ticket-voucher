import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const COM_URL = "https://xn--299a64rxvbk71bjne.com";

const neverShareData = [
  { icon: "🔑", title: "계좌 비밀번호·이체 비밀번호", desc: "어떤 상담원도 계좌 비밀번호나 이체 비밀번호를 직접 물어볼 이유가 없습니다." },
  { icon: "🪪", title: "공동인증서(구 공인인증서) 비밀번호", desc: "인증서 비밀번호는 본인만 알아야 하는 정보로, 절대 타인에게 공유해서는 안 됩니다." },
  { icon: "💳", title: "카드 CVC·유효기간 전체 정보", desc: "카드 뒷면 CVC 번호는 실제 결제창 외에는 입력하거나 알려줄 필요가 없는 정보입니다." },
  { icon: "🆔", title: "주민등록번호 뒷자리 전체", desc: "본인 인증에는 대부분 생년월일과 성별 정보만으로 충분하며, 뒷자리 전체를 요구하는 것은 이례적입니다." },
];

const faqData = [
  {
    question: "상담원이 계좌 비밀번호를 요구하면 어떻게 하나요?",
    answer: "즉시 상담을 중단하세요. 정상적인 절차에서는 계좌 비밀번호나 인증서 비밀번호를 요구하지 않습니다. 요구받았다면 사기를 의심하고 대화 내용을 증거로 보관해 두세요.",
  },
  {
    question: "정식 사이트인지 어떻게 확인하나요?",
    answer: "주소창의 URL 철자가 정확한지, HTTPS(자물쇠 아이콘) 연결인지 확인하세요. 검색 결과나 광고 링크보다는 즐겨찾기에 등록해 둔 정확한 주소로 접속하는 습관이 안전합니다.",
  },
  {
    question: "이미 개인정보를 알려줬다면 어떻게 해야 하나요?",
    answer: "즉시 관련 계좌 비밀번호와 인증 수단을 변경하고, 개인정보보호위원회 개인정보침해 신고센터(국번없이 118)에 문의하세요. 금전 피해가 있다면 경찰 신고도 함께 진행해야 합니다.",
  },
];

const Safety: React.FC = () => {
  return (
    <>
      <SEO
        title="개인정보·금융정보 보호 수칙 — 현금화 이용 시 지켜야 할 것들"
        description="현금화 서비스 이용 중 절대 알려주면 안 되는 정보, 피싱·스미싱 구별법, 정식 사이트 확인 방법 등 개인정보·금융정보를 지키는 안전 수칙을 정리했습니다."
        keywords="개인정보 보호수칙,피싱 스미싱 구별법,금융정보 보호,현금화 안전수칙"
        faqItems={faqData}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              🔒 개인정보 보호 이용가이드
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              개인정보·금융정보 보호 수칙<br />
              <span className="text-emerald-700">현금화 이용 시 지켜야 할 것들</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              어떤 업체를 이용하든, 절대 알려주면 안 되는 정보와 피싱을
              구별하는 방법을 알아두면 피해를 예방할 수 있습니다.
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
              절대 알려주면 안 되는 정보 4가지
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {neverShareData.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
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
              피싱·스미싱 구별하는 법
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" /><strong>출처가 불분명한 문자·메신저 링크</strong>는 클릭하지 마세요. 정식 업체는 대부분 홈페이지 직접 접속을 안내합니다.</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" /><strong>URL 주소를 꼼꼼히 확인하세요.</strong> 정식 도메인과 한두 글자만 다른 유사 주소(피싱 사이트)가 존재할 수 있습니다.</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" /><strong>지나치게 급박함을 강조하는 메시지</strong>("지금 안 하면 손해", "즉시 입력 필요")는 판단력을 흐리려는 수법일 수 있습니다.</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" />가능하다면 검색이나 광고 링크보다 <strong>즐겨찾기에 등록해 둔 정확한 주소</strong>로 접속하는 습관을 들이세요.</li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              통신·상담 시 안전 수칙
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>상담은 가급적 업체가 공식적으로 안내하는 채널(홈페이지 채팅, 공식 계정)로만 진행하세요.</li>
                <li>본인 인증에 사용한 문자 승인번호는 상담원을 포함해 그 누구에게도 알려주지 마세요.</li>
                <li>불필요하게 많은 개인정보(직장, 가족관계 등)를 요구하는 경우 응답을 자제하세요.</li>
                <li>상담 내용은 스크린샷 등으로 기록해 두면, 문제가 생겼을 때 중요한 증거가 됩니다.</li>
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
                안전한 업체 구별법 →
              </Link>
              <Link to="/blog/3" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                분쟁·사기 대처법 →
              </Link>
              <Link to="/how-to-use" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                이용 전 준비사항 체크리스트 →
              </Link>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-emerald-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">안전 수칙을 확인하셨다면</h2>
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

export default Safety;
