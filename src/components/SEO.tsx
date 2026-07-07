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
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, faqItems, pageType = 'general' }) => {
  const defaultKeywords = "상품권매입,상품권 매입,상품권 매입 방법,상품권매입 디시,상품권 매입 후기,상품권 매입 수수료,상품권 매입 업체,상품권 매입 추천,상품권 매입 사이트,상품권 방법,상품권 한도,상품권 한도 확인,휴대폰 상품권 매입,핸드폰 상품권 매입,컬쳐랜드 상품권 매입,해피머니 상품권 매입,백화점상품권 상품권 매입,모바일 상품권 매입,상품권 즉시입금,상품권 매입 안전,고릴라티켓,상품권매입,상품권매입,상품권매입";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const siteUrl = "https://xn--299a64rxvbk71bjne.net";
  const canonicalUrl = `${siteUrl}${window.location.pathname}`;
  const fullTitle = `${title} | 고릴라티켓`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "고릴라티켓",
    "url": siteUrl,
    "logo": `${siteUrl}/gorilla-mascot.webp`,
    "image": `${siteUrl}/gorilla-mascot.webp`,
    "description": "상품권매입 업계 1위. 컬쳐랜드·해피머니·백화점상품권 모든 상품권 상품권 매입, 3분 즉시입금, 모바일 99.9% 승인, 24시간 상담.",
    "telephone": "+82-10-2138-0790",
    "openingHours": "Mo-Su 00:00-24:00",
    "priceRange": "수수료 20~30%",
    "areaServed": "KR",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+82-10-2138-0790",
      "contactType": "customer service",
      "availableLanguage": "Korean",
      "hoursAvailable": "Mo-Su 00:00-24:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "847",
      "bestRating": "5"
    }
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
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="고릴라티켓" />
      <meta property="og:image" content={`${siteUrl}/gorilla-mascot.webp`} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/gorilla-mascot.webp`} />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
