export const metadata = {
  title: "تسجيل الدخول | Kiddo Kingdom",
  description: "قم بتسجيل الدخول للوصول إلى حسابك في متجر Kiddo Kingdom.",
  openGraph: {
    title: "تسجيل الدخول | Kiddo Kingdom",
    description: "قم بتسجيل الدخول للوصول إلى حسابك في متجر Kiddo Kingdom.",
    url: "https://kiddo-kingdom.com/login",
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
    title: "تسجيل الدخول | Kiddo Kingdom",
    description: "قم بتسجيل الدخول للوصول إلى حسابك في متجر Kiddo Kingdom.",
    images: [
      "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
    ],
  },
};

export default function LoginLayout({ children }) {
  return <>{children}</>;
}
