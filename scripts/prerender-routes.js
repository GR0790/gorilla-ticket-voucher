// 각 라우트에 index.html 복사 + 라우트별 정적 메타(title/desc/canonical/OG) + BreadcrumbList 스키마 주입
// JS를 실행하지 않는 크롤러(네이버 등)도 페이지별 고유 메타와 경로를 읽을 수 있습니다.
import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const SITE = 'https://xn--299a64rxvbk71bjne.net';
const BRAND = '고릴라티켓';

const ROUTE_META = {
  '/services/ticket': {
    title: '티켓 컨시어지 — 공연·전시 예매와 발권 | 고릴라티켓',
    description: '공연·전시·스포츠 티켓의 회차와 좌석을 확인하고, 예매부터 모바일·실물 발권, 취소·변경 안내까지 함께합니다.',
    crumbs: [['고릴라티켓', '/'], ['티켓 컨시어지', '/services/ticket/']],
  },
  '/services/voucher': {
    title: '상품권·바우처 — 선물과 사용처 확인 | 고릴라티켓',
    description: '문화·도서 상품권, 기프트카드, 체험 이용권까지. 유효기간과 사용처를 확인해 용도에 맞는 상품권을 준비합니다.',
    crumbs: [['고릴라티켓', '/'], ['상품권 · 바우처', '/services/voucher/']],
  },
  '/services/business': {
    title: '기업·단체 — 임직원 선물, 단체 관람, 행사 응모권 | 고릴라티켓',
    description: '임직원 선물, 단체 관람, 행사 응모권, 워크숍 체험권까지. 수량과 일정이 정해진 준비를 단계적으로 진행합니다.',
    crumbs: [['고릴라티켓', '/'], ['기업 · 단체', '/services/business/']],
  },
  '/how-to-use': {
    title: '이용 절차 — 상담부터 수령까지 | 고릴라티켓',
    description: '채널톡 상담 접수, 조건 확인, 진행, 전달, 수령 안내까지 다섯 단계로 정리한 이용 절차입니다.',
    crumbs: [['고릴라티켓', '/'], ['이용 절차', '/how-to-use/']],
  },
  '/faq': {
    title: '자주 묻는 질문 | 고릴라티켓',
    description: '상담 비용, 티켓 수령 방법, 상품권 유효기간, 개인정보 처리까지 자주 묻는 질문을 주제별로 정리했습니다.',
    crumbs: [['고릴라티켓', '/'], ['자주 묻는 질문', '/faq/']],
  },
  '/blog': {
    title: '이야기 — 티켓·상품권을 고르는 기준 | 고릴라티켓',
    description: '좌석 등급 읽는 법, 상품권 유효기간, 단체 관람 준비, 전시 시간 지정제까지. 준비 과정에서 실제로 부딪히는 문제를 정리했습니다.',
    crumbs: [['고릴라티켓', '/'], ['이야기', '/blog/']],
  },
  '/contact': {
    title: '상담 — 채널톡 1:1 문의 | 고릴라티켓',
    description: '고릴라티켓 상담 안내. 채널톡 1:1 상담은 24시간 접수되며, 티켓·상품권·기업 단체 문의를 담당자가 확인해 안내합니다.',
    crumbs: [['고릴라티켓', '/'], ['상담', '/contact/']],
  },
  '/privacy': {
    title: '개인정보처리방침 | 고릴라티켓',
    description: '고릴라티켓 개인정보처리방침. 상담 과정에서 확인하는 정보의 항목과 목적, 보유 기간, 이용자의 권리를 안내합니다.',
    crumbs: [['고릴라티켓', '/'], ['개인정보처리방침', '/privacy/']],
  },
  '/terms': {
    title: '이용약관 | 고릴라티켓',
    description: '고릴라티켓 이용약관. 상담 서비스의 성격과 이용 조건, 이용자의 의무, 책임의 범위를 안내합니다.',
    crumbs: [['고릴라티켓', '/'], ['이용약관', '/terms/']],
  },
};

// blogPosts.ts의 모든 글의 프리렌더 라우트를 자동으로 채웁니다.
const postsFile = path.resolve(process.cwd(), 'src/data/blogPosts.ts');
if (fs.existsSync(postsFile)) {
  const postsSource = fs.readFileSync(postsFile, 'utf-8');
  let added = 0;
  for (const block of postsSource.split(/sys: \{ id: "post-/).slice(1)) {
    const idMatch = block.match(/id:\s*(\d+)/);
    if (!idMatch) continue;
    const id = Number(idMatch[1]);
    const route = '/blog/' + id;
    if (ROUTE_META[route]) continue;
    const titleMatch = block.match(/title:\s*"((?:[^"\\]|\\.)*)"/);
    const descMatch = block.match(/summary:\s*"((?:[^"\\]|\\.)*)"/) || block.match(/excerpt:\s*"((?:[^"\\]|\\.)*)"/);
    const postTitle = titleMatch ? titleMatch[1] : '이야기';
    ROUTE_META[route] = {
      title: postTitle + ' | ' + BRAND,
      description: descMatch ? descMatch[1].slice(0, 150) : '',
      crumbs: [[BRAND, '/'], ['이야기', '/blog/'], [postTitle, route + '/']],
    };
    added++;
  }
  if (added > 0) console.log('Added ' + added + ' blog routes from blogPosts.ts');
}

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
  const url = SITE + route + '/';
  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/, '<title>' + title + '</title>');
  // 메타 태그는 여러 줄로 쓰일 수 있어 속성 사이 공백을 허용합니다.
  out = out.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, '$1' + desc + '$2');
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
