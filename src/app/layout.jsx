import "./globals.css";
import ClientProvider from "./ClientProvider";
export const metadata = {
  title: "Kiddo Kingdom | Kido Store",
  description:
    "Kiddo Kingdom - Your trusted kids' store for toys, clothes, and accessories. Shop the latest products online.",
  icons: {
    icon: "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
  },
  alternates: {
    canonical: "https://kiddo-kingdom.com",
  },
  openGraph: {
    title: "Kiddo Kingdom | Kido Store",
    description:
      "Discover Kiddo Kingdom - a kids' store offering toys, clothes, and accessories. Shop online with ease.",
    url: "https://kiddo-kingdom.com",
    siteName: "Kiddo Kingdom",
    images: [
      {
        url: "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
        width: 800,
        height: 600,
        alt: "Kiddo Kingdom Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiddo Kingdom | Kido Store",
    description:
      "Shop kids' toys, clothes, and accessories at Kiddo Kingdom. Trusted kids' store online.",
    images: [
      "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
