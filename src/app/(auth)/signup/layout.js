export const metadata = {
  title: "تسجيل حساب جديد | Kiddo Kingdom",
  description: "أنشئ حسابًا جديدًا للتسوق بسهولة في متجر Kiddo Kingdom والاستمتاع بأفضل المنتجات.",
  openGraph: {
    title: "تسجيل حساب جديد | Kiddo Kingdom",
    description: "سجل الآن في Kiddo Kingdom وأنشئ حسابًا جديدًا للتسوق بسهولة عبر الإنترنت.",
    url: "https://kiddo-kingdom.com/signup",
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
    title: "تسجيل حساب جديد | Kiddo Kingdom",
    description: "أنشئ حسابك الجديد في متجر Kiddo Kingdom وتمتع بتجربة تسوق مميزة.",
    images: [
      "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
    ],
  },
};

export default function SignupLayout({ children }) {
  return <>{children}</>;
}
