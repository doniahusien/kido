export const metadata = {
  title: "لوحة التحكم | Kiddo Kingdom Admin",
  description: "إدارة المنتجات والفئات والمستخدمين من خلال لوحة التحكم في Kiddo Kingdom.",
  openGraph: {
    title: "لوحة التحكم | Kiddo Kingdom Admin",
    description: "تحكم في متجر Kiddo Kingdom: إدارة المنتجات، الطلبات، والمستخدمين بسهولة.",
    url: "https://kiddo-kingdom.com/admin",
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
    title: "لوحة التحكم | Kiddo Kingdom Admin",
    description: "إدارة متجر Kiddo Kingdom: المنتجات، الطلبات، والعملاء من مكان واحد.",
    images: [
      "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
    ],
  },
};

export default function AdminLayout({ children }) {
  return <>{children}</>;
}
