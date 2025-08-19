import "./globals.css";
import ClientProvider from "./ClientProvider";

export const metadata = {
  title: "Kido Store",
  icons: {
    icon: "https://res.cloudinary.com/dikmcl1b6/image/upload/v1755439466/logo_oikak8.png",
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
