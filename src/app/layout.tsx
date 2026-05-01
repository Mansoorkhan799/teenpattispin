import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://teenpattispingame.com.pk'),
  title: {
    default: "Teen Patti Spin | Pakistan's Most Trusted 3 Patti Gaming Platform 2026",
    template: "%s | Teen Patti Spin"
  },
  description: "Download Teen Patti Spin APK – play Teen Patti, Rummy & more. Win real cash via JazzCash & EasyPaisa. Join 500K+ players in Pakistan!",
  keywords: [
    "Teen Patti Spin",
    "Teen Patti Spin APK",
    "Teen Patti Spin download",
    "3 Patti Spin",
    "Pakistan card games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile card games",
    "real money games Pakistan",
    "card game earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan"
  ],
  authors: [{ name: "Teen Patti Spin Team" }],
  creator: "Teen Patti Spin",
  publisher: "Teen Patti Spin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/teen-patti-spin.ico', type: 'image/x-icon', sizes: '32x32' },
      { url: '/teen-patti-spin.webp', type: 'image/webp', sizes: '192x192' },
    ],
    apple: [
      { url: '/teen-patti-spin.webp', sizes: '180x180', type: 'image/webp' }
    ],
    shortcut: ['/teen-patti-spin.ico']
  },
  manifest: '/manifest.json',
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://teenpattispingame.com.pk",
  },
  openGraph: {
    title: "Teen Patti Spin | Pakistan's Most Trusted 3 Patti Gaming Platform 2026",
    description: "Join 500K+ players on Pakistan's premier card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    url: "https://teenpattispingame.com.pk",
    siteName: "Teen Patti Spin",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Spin | Pakistan's Most Trusted 3 Patti Gaming Platform 2026",
    description: "Join 500K+ players on Pakistan's premier card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    creator: "@teenpattispin",
  },
  applicationName: "Teen Patti Spin",
  category: "Gaming",
  classification: "Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Only preconnect to GTM when GA is used - avoids unused preconnect warning */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        )}
        
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Favicon - Multiple formats for best browser support */}
        <link rel="icon" href="/teen-patti-spin.ico" sizes="32x32" />
        <link rel="icon" href="/teen-patti-spin.webp" type="image/webp" sizes="192x192" />
        <link rel="apple-touch-icon" href="/teen-patti-spin.webp" sizes="180x180" />
        
        <meta property="og:image" content="https://teenpattispingame.com.pk/teen-patti-spin.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://teenpattispingame.com.pk/teen-patti-spin.webp" />
        
        {/* Google Analytics - Add your GA4 Measurement ID to NEXT_PUBLIC_GA_ID env var */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-primary focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main id="main-content" className="flex-grow relative z-10">
        {children}
        </main>
        <Footer />
        <ScrollToTop />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Teen Patti Spin",
              "url": "https://teenpattispingame.com.pk",
              "logo": "https://teenpattispingame.com.pk/teen-patti-spin.webp",
              "description": "Teen Patti Spin is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, and many other card games with real cash rewards.",
              "sameAs": [
                "https://www.facebook.com/teenpattispin",
                "https://x.com/teenpattispin"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Teen Patti Spin",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.6",
                "ratingCount": "500000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
