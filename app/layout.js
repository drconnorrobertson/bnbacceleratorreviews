import "./globals.css";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.bnbacceleratorreviews.co"),
  title: {
    template: "%s | BnB Accelerator Reviews",
    default: "BNB Accelerator Reviews | Verified Sources and Client Evidence",
  },
  description:
    "A BNB Accelerator-owned review and evidence website with independent review links, documented case studies, and a transparent publication standard.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bnbacceleratorreviews.co",
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
      <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1040260527597629');
fbq('track', 'PageView');`}</Script>
      <Script src="/bnb-conversion.js?v=20261010" strategy="afterInteractive" />
      <body
        className="min-h-screen flex flex-col bg-gray-50"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt=""
            src="https://www.facebook.com/tr?id=1040260527597629&ev=PageView&noscript=1" />
        </noscript>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
