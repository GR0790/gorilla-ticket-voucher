import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

// 라우트별 코드 분할
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BusinessService = lazy(() => import("./pages/BusinessService"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const HowToUse = lazy(() => import("./pages/HowToUse"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const TicketService = lazy(() => import("./pages/TicketService"));
const VoucherService = lazy(() => import("./pages/VoucherService"));
const NotFound = lazy(() => import("./pages/NotFound"));

// 정리된 이전 주소는 새 안내 페이지로 보냅니다.
const LEGACY_REDIRECTS: Record<string, string> = {
  "/services/micropayment": "/services/ticket",
  "/services/information-fee": "/services/voucher",
  "/services/credit-card": "/services/ticket",
  "/services/gift-card": "/services/voucher",
  "/reviews": "/how-to-use",
  "/safety": "/how-to-use",
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="min-h-screen bg-ivory" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/ticket" element={<TicketService />} />
            <Route path="/services/voucher" element={<VoucherService />} />
            <Route path="/services/business" element={<BusinessService />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {Object.entries(LEGACY_REDIRECTS).map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
