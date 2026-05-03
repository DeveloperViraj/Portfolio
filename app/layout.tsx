import { DM_Sans, Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

/* =========================
   UPDATE THIS TO YOUR DOMAIN
   ========================= */
const BASE_URL = "https://developerviraj.in";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: "Viraj Jadhav - Full-Stack Developer",

  description:
    "Viraj Jadhav is a Full-Stack Developer building scalable, high-performance web applications using React, Node.js, MongoDB, and modern backend architecture.",

  keywords: [
    "Viraj Jadhav",
    "Viraj Jadhav portfolio",
    "Full stack developer India",
    "MERN stack developer",
    "React developer",
    "Node.js developer",
    "MongoDB developer",
    "JavaScript developer",
    "Next.js developer",
    "Backend developer",
    "Frontend developer",
  ],

  authors: [{ name: "Viraj Jadhav" }],
  creator: "Viraj Jadhav",
  publisher: "Viraj Jadhav",

  openGraph: {
    title: "Viraj Jadhav - Full-Stack Developer",
    description:
      "Full-Stack developer specializing in MERN stack. Building scalable, production-ready web applications.",
    url: BASE_URL,
    siteName: "Viraj Jadhav Portfolio",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Viraj Jadhav Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Viraj Jadhav - Full-Stack Developer",
    description:
      "Full-Stack developer building scalable web apps with React, Node.js & MongoDB.",
    images: [`${BASE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />

        {/* Adsense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-4548722974359094"
        />

        {/* Pinterest Verification (optional) */}
        <meta
          name="p:domain_verify"
          content="9f7382bead040ea073ec7ec56997bc6e"
        />
      </head>

      <body
        className={`${dmSans.variable} ${inter.variable} ${newsreader.variable}`}
      >
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TFKGWBDWZV"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TFKGWBDWZV');
          `}
        </Script>

        {/* Adsense Script */}
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4548722974359094"
          crossOrigin="anonymous"
        />

        {children}
      </body>
    </html>
  );
}