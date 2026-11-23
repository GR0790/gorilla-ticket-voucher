import { services } from "./services";

export const site = {
  name: "고릴라티켓",
  nameEn: "Gorilla Ticket",
  tagline: "상품권 구매 · 매입 절차 안내",
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
    label: "이용 안내",
    to: "/services/gift-card/",
    children: services.map((s) => ({
      label: s.nav,
      to: s.slug,
      desc: s.cardBody.split(".")[0],
    })),
  },
  { label: "이용 절차", to: "/how-to-use/" },
  { label: "이야기", to: "/blog/" },
  { label: "FAQ", to: "/faq/" },
  { label: "상담", to: "/contact/" },
];
