export const metadata = {
  title: "تواصل معنا | Kiddo Kingdom",
  description:
    "تواصل مع فريق Kiddo Kingdom لأي استفسارات أو دعم فني، وسنكون سعداء بخدمتك.",
  openGraph: {
    title: "تواصل معنا | Kiddo Kingdom",
    description:
      "احصل على الدعم الفني أو تواصل مع فريق Kiddo Kingdom لأي استفسار حول منتجاتنا وخدماتنا.",
    url: "https://kiddo-kingdom.com/contact",
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
    title: "تواصل معنا | Kiddo Kingdom",
    description:
      "تواصل مع فريق Kiddo Kingdom لأي استفسارات أو دعم فني وسنرد عليك في أقرب وقت.",
    images: [
      "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
    ],
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
