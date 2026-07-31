// 각 라우트에 index.html 복사 + 라우트별 정적 메타(title/desc/canonical/OG) + BreadcrumbList 스키마 주입
// JS를 실행하지 않는 크롤러(네이버 등)도 페이지별 고유 메타와 경로를 읽을 수 있습니다.
import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const SITE = 'https://xn--299a64rxvbk71bjne.net';

const ROUTE_META = {
  "/services/micropayment": {
    "title": "소액결제 현금화란? 개념·한도 확인·이용 절차 총정리 | 고릴라티켓 이용가이드",
    "description": "소액결제 현금화가 무엇인지부터 SKT·KT·LGU+ 한도 확인 방법, 일반적인 이용 절차, 안전하게 이용하기 위한 체크포인트까지 정리한 이용가이드입니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "소액결제 현금화",
        "/services/micropayment/"
      ]
    ]
  },
  "/services/information-fee": {
    "title": "정보이용료(콘텐츠이용료) 현금화란? 소액결제와의 차이 정리 | 고릴라티켓 이용가이드",
    "description": "정보이용료·콘텐츠이용료 현금화가 무엇인지, 소액결제와 어떻게 다른지, 한도 확인 방법과 이용 시 유의사항까지 정리한 이용가이드입니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "정보이용료 현금화",
        "/services/information-fee/"
      ]
    ]
  },
  "/services/credit-card": {
    "title": "신용카드 현금화란? 카드깡과의 차이, 확인해야 할 사항 | 고릴라티켓 이용가이드",
    "description": "신용카드 현금화가 무엇인지, 불법 카드깡과 어떻게 다른지, 이용 전 반드시 확인해야 할 사항을 정리한 정보 가이드입니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "신용카드 현금화",
        "/services/credit-card/"
      ]
    ]
  },
  "/services/gift-card": {
    "title": "상품권 현금화란? 종류별 매입 안내 및 확인사항 | 고릴라티켓 이용가이드",
    "description": "문화상품권, 해피머니, 구글 기프트카드 등 상품권 현금화가 무엇인지, 매입 가능한 상품권 종류와 이용 전 확인해야 할 사항을 정리했습니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "상품권 현금화",
        "/services/gift-card/"
      ]
    ]
  },
  "/how-to-use": {
    "title": "처음 이용하기 전 준비사항 체크리스트 | 고릴라티켓 이용가이드",
    "description": "현금화 서비스를 처음 이용하기 전 미리 확인해야 할 정보, 업체와 상담 시 점검할 사항, 거래 기록을 남기는 방법과 사후 확인 절차를 정리한 준비 가이드입니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "이용 전 준비사항",
        "/how-to-use/"
      ]
    ]
  },
  "/reviews": {
    "title": "후기, 어떻게 걸러서 봐야 할까? 가짜 후기 구별법 | 고릴라티켓 이용가이드",
    "description": "현금화 업체를 알아볼 때 후기를 어떻게 검증해야 하는지, 조작된 후기의 5가지 특징과 신뢰할 수 있는 후기를 찾는 방법을 정리했습니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "후기 검증하는 법",
        "/reviews/"
      ]
    ]
  },
  "/faq": {
    "title": "소액결제·정보이용료·신용카드·상품권 현금화 FAQ 총정리 | 고릴라티켓 이용가이드",
    "description": "소액결제현금화, 정보이용료현금화, 신용카드현금화, 상품권현금화에 대해 자주 묻는 질문과 답변을 정리한 이용가이드 FAQ입니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "자주묻는질문",
        "/faq/"
      ]
    ]
  },
  "/safety": {
    "title": "개인정보·금융정보 보호 수칙 — 현금화 이용 시 지켜야 할 것들 | 고릴라티켓 이용가이드",
    "description": "현금화 서비스 이용 중 절대 알려주면 안 되는 정보, 피싱·스미싱 구별법, 정식 사이트 확인 방법 등 개인정보·금융정보를 지키는 안전 수칙을 정리했습니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "개인정보 보호 수칙",
        "/safety/"
      ]
    ]
  },
  "/blog": {
    "title": "현금화 안전가이드 블로그 - 사기예방·법률정보·분쟁대처 | 고릴라티켓 이용가이드",
    "description": "안전한 현금화 업체 구별법, 신용카드현금화와 카드깡의 법적 차이, 사기 피해 대처법, 통신사 정책 비교 등 소비자 보호 중심의 이용가이드 블로그입니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ]
    ]
  },
  "/blog/1": {
    "title": "안전한 현금화 업체 구별법 — 사기 피해 예방 체크리스트 8가지 | 고릴라티켓 이용가이드",
    "description": "소액결제·정보이용료·신용카드·상품권 현금화를 이용하기 전, 안전한 업체와 위험한 업체를 구별하는 8가지 체크포인트를 정리했습니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "안전한 현금화 업체 구별법 — 사기 피해 예방 체크리스트 8가지",
        "/blog/1/"
      ]
    ]
  },
  "/blog/2": {
    "title": "신용카드현금화와 카드깡, 법적으로 무엇이 다를까? | 고릴라티켓 이용가이드",
    "description": "신용카드현금화라는 용어가 불법 카드깡과 자주 혼동됩니다. 여신전문금융업법을 기준으로 두 개념의 법적 차이를 정리했습니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "신용카드현금화와 카드깡, 법적으로 무엇이 다를까?",
        "/blog/2/"
      ]
    ]
  },
  "/blog/3": {
    "title": "현금화 관련 분쟁·사기 피해, 대처방법과 신고 절차 총정리 | 고릴라티켓 이용가이드",
    "description": "현금화 이용 중 업체와 분쟁이 생겼거나 사기 피해를 당했을 때 증거를 확보하고 신고하는 절차를 단계별로 정리했습니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "현금화 관련 분쟁·사기 피해, 대처방법과 신고 절차 총정리",
        "/blog/3/"
      ]
    ]
  },
  "/blog/4": {
    "title": "SKT·KT·LGU+ 통신사별 소액결제 정책 완벽 비교 | 고릴라티켓 이용가이드",
    "description": "SKT·KT·LGU+ 3대 통신사의 소액결제 한도 정책, 미성년자 이용 제한, 연체 시 처리 방식 등 정책 차이를 비교했습니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "SKT·KT·LGU+ 통신사별 소액결제 정책 완벽 비교",
        "/blog/4/"
      ]
    ]
  },
  "/blog/5": {
    "title": "정보이용료 연체·미납 시 발생하는 일과 해결 방법 | 고릴라티켓 이용가이드",
    "description": "정보이용료(콘텐츠이용료)를 연체하면 어떤 일이 생기는지, 신용점수에 미치는 영향과 미납금을 해결하는 방법을 정리했습니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "정보이용료 연체·미납 시 발생하는 일과 해결 방법",
        "/blog/5/"
      ]
    ]
  },
  "/blog/6": {
    "title": "상품권 매입 시세는 어떻게 정해질까? 매입 시장 이해하기 | 고릴라티켓 이용가이드",
    "description": "문화상품권·해피머니 등 상품권 매입률이 업체마다, 시기마다 다른 이유와 매입 시세를 이해하는 데 필요한 기본 개념을 정리했습니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "상품권 매입 시세는 어떻게 정해질까? 매입 시장 이해하기",
        "/blog/6/"
      ]
    ]
  },
  "/contact": {
    "canonicalOverride": "https://xn--299a64rxvbk71bjne.com/contact/",
    "title": "상담센터 - 24시간 1:1 문의 | 고릴라티켓",
    "description": "고릴라티켓 소액결제현금화 24시간 1:1 상담센터. 전화·채팅으로 언제든 문의하세요. 3분 즉시입금, 미납·정책 99.9% 승인 상담 안내.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "상담센터",
        "/contact/"
      ]
    ]
  },
  "/privacy": {
    "canonicalOverride": "https://xn--299a64rxvbk71bjne.com/privacy/",
    "title": "개인정보처리방침 | 고릴라티켓",
    "description": "고릴라티켓 개인정보처리방침. 고객님의 개인정보 수집·이용·보관·파기에 관한 안내입니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "개인정보처리방침",
        "/privacy/"
      ]
    ]
  },
  "/terms": {
    "canonicalOverride": "https://xn--299a64rxvbk71bjne.com/terms/",
    "title": "이용약관 | 고릴라티켓",
    "description": "고릴라티켓 소액결제현금화 서비스 이용약관 안내입니다.",
    "crumbs": [
      [
        "고릴라티켓",
        "/"
      ],
      [
        "이용약관",
        "/terms/"
      ]
    ]
  }
};

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

function breadcrumbLd(crumbs) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c[0], item: SITE + c[1],
    })),
  });
}

function inject(html, route, m) {
  const title = esc(m.title);
  const desc = esc(m.description);
  const url = m.canonicalOverride || (SITE + route + '/');
  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/, '<title>' + title + '</title>');
  out = out.replace(/(<meta name="description" content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta property="og:title" content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta property="og:description" content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta name="twitter:title" content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta name="twitter:description" content=")[^"]*(")/, '$1' + desc + '$2');
  const bc = '<script type="application/ld+json">' + breadcrumbLd(m.crumbs) + '<\/script>';
  out = out.replace('</head>', bc + '</head>');
  return out;
}

let count = 0;
for (const [route, m] of Object.entries(ROUTE_META)) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), inject(indexHtml, route, m));
  count++;
}
console.log('Prerendered ' + count + ' routes with static meta + breadcrumbs.');
