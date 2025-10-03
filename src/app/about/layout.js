export const metadata = {
  title: "من نحن | Kiddo Kingdom",
  description:
    "تعرف على متجر Kiddo Kingdom وفريق العمل الذي يسعى لتقديم أفضل تجربة تسوق للأطفال من ألعاب وملابس وإكسسوارات.",
  openGraph: {
    title: "من نحن | Kiddo Kingdom",
    description:
      "اكتشف قصة Kiddo Kingdom وتعرف على فريق العمل وخدماتنا المميزة في عالم منتجات الأطفال.",
    url: "https://kiddo-kingdom.com/about",
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
    title: "من نحن | Kiddo Kingdom",
    description:
      "تعرف على قصة متجر Kiddo Kingdom وفريق العمل المخصص لتقديم أفضل تجربة تسوق للأطفال.",
    images: [
      "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
    ],
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
