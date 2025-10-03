export const metadata = {
  title: "لوحة التحكم: الطلبات | Kiddo Kingdom Admin",
  description: "إدارة ومراجعة جميع طلبات العملاء في لوحة التحكم الخاصة بـ Kiddo Kingdom.",
  openGraph: {
    title: "لوحة التحكم: الطلبات | Kiddo Kingdom Admin",
    description: "تحكم في جميع طلبات العملاء من خلال لوحة التحكم في متجر Kiddo Kingdom.",
    url: "https://kiddo-kingdom.com/admin/orders",
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
    title: "لوحة التحكم: الطلبات | Kiddo Kingdom Admin",
    description: "إدارة وتتبع طلبات العملاء في متجر Kiddo Kingdom بسهولة وسرعة.",
    images: [
      "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
    ],
  },
};

export default function AdminOrdersLayout({ children }) {
  return <>{children}</>;
}
