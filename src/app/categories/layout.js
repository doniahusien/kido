export const metadata = {
  title: "لوحة التحكم: التصنيفات | Kiddo Kingdom Admin",
  description: "إدارة وعرض جميع تصنيفات متجر Kiddo Kingdom من خلال لوحة التحكم.",
  openGraph: {
    title: "لوحة التحكم: التصنيفات | Kiddo Kingdom Admin",
    description: "قم بإدارة وإنشاء وتحديث جميع تصنيفات المنتجات بسهولة في متجر Kiddo Kingdom.",
    url: "https://kiddo-kingdom.com/admin/categories",
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
    title: "لوحة التحكم: التصنيفات | Kiddo Kingdom Admin",
    description: "إدارة جميع تصنيفات المنتجات من خلال لوحة التحكم الخاصة بـ Kiddo Kingdom.",
    images: [
      "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
    ],
  },
};

export default function AdminCategoriesLayout({ children }) {
  return <>{children}</>;
}
