export const metadata = {
  title: "سلة التسوق | Kiddo Kingdom",
  description: "تصفح سلة التسوق الخاصة بك في متجر Kiddo Kingdom وأكمل عملية الشراء بسهولة.",
  openGraph: {
    title: "سلة التسوق | Kiddo Kingdom",
    description: "اعرض المنتجات المضافة إلى سلة التسوق وأكمل طلبك بسهولة مع Kiddo Kingdom.",
    url: "https://kiddo-kingdom.com/cart",
    siteName: "Kiddo Kingdom",
    images: [
      {
        url: "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
        width: 800,
        height: 600,
        alt: "Kiddo Kingdom Logo",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "سلة التسوق | Kiddo Kingdom",
    description: "راجع سلة التسوق الخاصة بك وأكمل عملية الشراء الآن من Kiddo Kingdom.",
    images: [
      "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
    ],
  },
};

export default function CartLayout({ children }) {
  return <>{children}</>;
}
