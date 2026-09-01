import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    template: "%s | BnB Accelerator Reviews",
    default: "BnB Accelerator Reviews | Honest Student Reviews & Results",
  },
  description:
    "Read honest, in-depth reviews of BnB Accelerator from real students. See actual results, income numbers, and detailed experiences from people who have been through the program.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bnbacceleratorreviews.com",
    siteName: "BnB Accelerator Reviews",
    title: "BnB Accelerator Reviews | Honest Student Reviews & Results",
    description:
      "Read honest, in-depth reviews of BnB Accelerator from real students. See actual results, income numbers, and detailed experiences from people who have been through the program.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BnB Accelerator Reviews | Honest Student Reviews & Results",
    description:
      "Read honest, in-depth reviews of BnB Accelerator from real students. See actual results, income numbers, and detailed experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bnbacceleratorreviews.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-gray-50"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
