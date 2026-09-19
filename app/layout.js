import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    template: "%s | BnB Accelerator Reviews",
    default: "BNB Accelerator Reviews | Verified Sources and Client Evidence",
  },
  description:
    "A BNB Accelerator-owned review and evidence website with independent review links, documented case studies, and a transparent publication standard.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bnbacceleratorreviews.com",
    siteName: "BnB Accelerator Reviews",
    title: "BNB Accelerator Reviews | Verified Sources and Client Evidence",
    description:
      "Review independent ratings, documented client case studies, and the standards used to publish client evidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BNB Accelerator Reviews | Verified Sources and Client Evidence",
    description:
      "Review independent ratings, documented client case studies, and transparent service disclosures.",
  },
  robots: {
    index: false,
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
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
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
