export const site = {
  name: "고릴라티켓",
  nameEn: "Gorilla Ticket",
  tagline: "티켓 · 상품권 · 바우처 컨시어지",
  phone: "010-2138-0790",
  phoneHref: "tel:01021380790",
  hours: "24시간 연중무휴",
  hoursNote: "채널톡 1:1 상담",
  url: "https://xn--299a64rxvbk71bjne.net",
  channelPluginKey: "b065b9cc-1f27-4780-a688-7d3e28d21b67",
  year: 2026,
};

export interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string; desc: string }[];
}

export const nav: NavItem[] = [
  {
    label: "서비스",
    to: "/services/ticket",
    children: [
      {
        label: "티켓 컨시어지",
        to: "/services/ticket",
        desc: "공연·전시·스포츠 예매와 발권",
      },
      {
        label: "상품권 · 바우처",
        to: "/services/voucher",
        desc: "선물용 상품권과 이용권 준비",
      },
      {
        label: "기업 · 단체",
        to: "/services/business",
        desc: "임직원 선물, 단체 관람, 행사 응모권",
      },
    ],
  },
  { label: "이용 절차", to: "/how-to-use" },
  { label: "이야기", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "상담", to: "/contact" },
];
