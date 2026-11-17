# 고릴라티켓 (gorilla-ticket-voucher)

고릴라티켓.net 의 프리미엄 디자인 리뉴얼 버전입니다. 공연·전시 티켓 예매, 상품권·바우처 준비, 기업·단체 의뢰를 채널톡 1:1 상담으로 안내하는 티켓 컨시어지 사이트입니다.

## 구성

- **React 18 + TypeScript + Vite + Tailwind CSS**
- 디자인 토큰: `tailwind.config.js` (ink / forest / ivory / brass 팔레트, `font-display` 세리프)
- 공통 스타일: `src/index.css` (`.wrap`, `.btn-primary`, `.eyebrow`, `.card`, `.prose` 등)
- 공통 컴포넌트: `src/components/ui.tsx` (섹션 헤딩, 아코디언, 상담 배너, 페이지 히어로)
- 라우트: `/`, `/services/ticket`, `/services/voucher`, `/services/business`, `/how-to-use`, `/faq`, `/blog`, `/blog/:id`, `/contact`, `/privacy`, `/terms`
- 콘텐츠 데이터: `src/data/site.ts`(연락처·내비게이션), `src/data/blogPosts.ts`(저널 글)

## 채널톡

`index.html`에서 채널톡 SDK를 부트합니다. 모든 상담 버튼은 `window.openConsultChannel()` 을 호출하며, 플러그인 키 `b065b9cc-1f27-4780-a688-7d3e28d21b67` 로 부트한 뒤 메신저를 엽니다. 기본 런처는 `hideChannelButtonOnBoot` 로 숨기고, 사이트의 상담 버튼(히어로·섹션·플로팅·푸터)을 사용합니다.

## 빌드

```bash
bun install
bun run build   # sitemap 생성 → vite build → 라우트별 정적 메타/브레드크럼 프리렌더
bun run dev
```

`main` 브랜치에 푸시하면 GitHub Actions가 빌드 후 GitHub Pages로 배포합니다.
