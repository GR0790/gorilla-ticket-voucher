# 고릴라티켓 (gorilla-ticket-voucher)

고릴라티켓.net 의 쿨톤 리뉴얼 버전입니다. 상품권 매입, 휴대폰 소액결제·신용카드 상품권 구매,
정보이용료 게임재화 구매의 절차를 확인해 채널톡 1:1 상담으로 안내하는 사이트입니다.

## 구성

- **React 18 + TypeScript + Vite + Tailwind CSS**
- 디자인 토큰: `tailwind.config.js` (ink / night / frost / azure / sky 팔레트, Pretendard 산세리프)
- 공통 스타일: `src/index.css` (`.wrap`, `.btn-primary`, `.eyebrow`, `.card`, `.prose`, `.grid-bg` 등)
- 공통 컴포넌트: `src/components/ui.tsx` (섹션 헤딩, 아코디언, 상담 배너, 페이지 히어로),
  `src/components/ConsultModal.tsx` (이름·연락처 입력 모달)
- 라우트: `/`, `/services/gift-card`, `/services/micropayment`, `/services/credit-card`,
  `/services/information-fee`, `/how-to-use`, `/faq`, `/blog`, `/blog/:id`, `/contact`, `/privacy`, `/terms`
- 콘텐츠 데이터: `src/data/site.ts`(연락처·내비게이션), `src/data/services.ts`(4대 이용 안내),
  `src/data/blogPosts.ts`(저널 글)

## 채널톡 · 고객 식별

`index.html`에서 채널톡 SDK를 부트합니다. 모든 상담 버튼은 `src/lib/consult.ts` 의 `openConsult()` 를 호출합니다.

- 저장된 정보가 없으면 **이름 + 휴대폰 번호(자동 하이픈) + 개인정보 동의** 모달이 먼저 열리고,
  제출하면 `ChannelIO('shutdown')` → `boot({ pluginKey, memberId: 숫자만 번호, profile: { name, mobileNumber } })`
  → `showMessenger` 순서로 연결됩니다.
- 저장 키는 `grpay_name` / `grpay_phone` 으로, `gorilla-ticket` · `gongryong-pay` 와 동일한 포맷입니다.
- 플러그인 키: `b065b9cc-1f27-4780-a688-7d3e28d21b67`
- 기본 런처는 `hideChannelButtonOnBoot` 로 숨기고, 사이트의 상담 버튼(헤더·히어로·섹션·플로팅·푸터)을 사용합니다.

## 빌드

```bash
bun install
bun run build   # sitemap 생성 → vite build → 라우트별 정적 메타/브레드크럼 프리렌더
bun run dev
```

`main` 브랜치에 푸시하면 GitHub Actions가 빌드 후 GitHub Pages로 배포합니다.
