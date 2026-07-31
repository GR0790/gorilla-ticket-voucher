import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  faqItems?: FAQItem[];
  pageType?: 'home' | 'service' | 'blog' | 'general';
  /**
   * 콘텐츠가 고릴라티켓.com과 동일/거의 동일한 페이지일 경우, 중복 콘텐츠로
   * 평가되지 않도록 canonical을 .com의 대응 URL로 지정합니다.
   * (예: "https://xn--299a64rxvbk71bjne.com/blog/1")
   * 지정하지 않으면 기본값(자기 자신의 URL, 즉 self-canonical)이 사용됩니다.
   */
  canonicalOverride?: string;
}

// 주의: react-helmet-async v2에서 <Helmet> 자식으로 넣은 <script> 태그는
// 실제로 DOM에 주입되지 않는 버그가 있습니다(이번 세션에서 확인됨).
// 그래서 JSON-LD <script>는 Helmet 밖(컴포넌트 자체 반환값의 형제 요소)으로 렌더링합니다.
const SEO: React.FC<SEOProps> = ({ title, description, keywords, faqItems, pageType = 'general', canonicalOverride }) => {
  const defaultKeywords = "소액결제현금화 가이드,소액결제 현금화 방법,소액결제 한도 확인,정보이용료현금화 가이드,신용카드현금화 정보,상품권현금화 안내,소액결제 안전 이용,고릴라티켓 이용가이드,휴대폰 소액결제 한도,정보이용료 한도";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const siteUrl = "https://xn--299a64rxvbk71bjne.net";
  const canonicalUrl = canonicalOverride || `${siteUrl}${window.location.pathname}`;
  const fullTitle = `${title} | 고릴라티켓 이용가이드`;

  // .net은 실제 서비스 신청 페이지(.com)가 아닌 정보/가이드 허브로 운영됩니다.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "고릴라티켓 이용가이드",
    "url": siteUrl,
    "logo": `${siteUrl}/gorilla-mascot.webp`,
    "image": `${siteUrl}/gorilla-mascot.webp`,
    "description": "소액결제현금화·정보이용료현금화·신용카드현금화·상품권현금화 이용방법, 한도관리, 안전수칙을 정리한 정보 가이드 허브입니다.",
    "sameAs": ["https://xn--299a64rxvbk71bjne.com"]
  };

  const faqSchema = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={finalKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="고릴라티켓 이용가이드" />
        <meta property="og:image" content={`${siteUrl}/gorilla-mascot.webp`} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:image:alt" content={fullTitle} />
        <meta property="og:url" content={canonicalUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/gorilla-mascot.webp`} />
        <meta name="twitter:image:alt" content={fullTitle} />
      </Helmet>

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </>
  );
};

export default SEO;
