import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/ui/Navbar";
import { Footer } from "@/app/components/ui/Footer";
import { CustomCursor } from "@/app/components/ui/CustomCursor";
import { ScrollProgressBar } from "@/app/components/ui/ScrollProgressBar";
import profileData from "@/app/data/profile.json";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

// CHANGE: Enhanced metadata with comprehensive SEO fields
export const metadata: Metadata = {
  metadataBase: new URL('https://vivekmalhan-cb919.vercel.app/'),
  title: {
    default: `${profileData.name} — ${profileData.title}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.bio,
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
    "Publicis Sapient Engineer",
    "Tech Blogger",
    "YouTuber Developer",
    "Generative AI Developer",
    "AI Agents Developer",
    "React Native Developer",
    "Node.js Developer",
    profileData.name,
    "Vivek Malhan",
    "vivek",
    "Software Engineer India",
    "Delhi NCR Developer",
  ],
  authors: [{ name: profileData.name, url: 'https://vivekmalhan-cb919.vercel.app/' }],
  creator: profileData.name,
  publisher: profileData.name,
  
  // CHANGE: Add alternates for canonical URL
  alternates: {
    canonical: 'https://vivekmalhan-cb919.vercel.app/',
  },
  
  // CHANGE: Enhanced Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: 'https://vivekmalhan-cb919.vercel.app/',
    title: `${profileData.name} — ${profileData.title}`,
    description: profileData.bio,
    siteName: `${profileData.name}'s Portfolio`,
    images: [
      {
        url: '/images/vivek.png', // You'll need to create this
        width: 1200,
        height: 630,
        alt: `${profileData.name} - Full Stack Developer Portfolio`,
      },
    ],
  },
  
  // CHANGE: Comprehensive robots configuration
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
  
  // CHANGE: Add verification for search consoles
  verification: {
    google: '8pr66LmXLtIoOTWtBgiAlGA-rn9sa2iFuvmfcVc19Lk' // Get from Google Search Console
  },
  
  // CHANGE: Add category for better classification
  category: 'technology',
};

// CHANGE: Enhanced JSON-LD with comprehensive schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://vivekmalhan-cb919.vercel.app/#person",
      name: profileData.name,
      jobTitle: profileData.title,
      description: profileData.bio,
      email: profileData.email,
      url: "https://vivekmalhan-cb919.vercel.app/",
      image: "https://vivekmalhan-cb919.vercel.app/images/vivek.png",
      sameAs: [
        "https://www.linkedin.com/in/vivek-malhan-156984195/",
        "https://github.com/VivekMalhan666",
        "https://medium.com/@amalhan43",
        "https://www.youtube.com/@vivekmalhan",
        "https://www.npmjs.com/~vivekmalhan",
      ],
      knowsAbout: [
        "Full Stack Development",
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Generative AI",
        "AI Agents",
        "Web Development",
        "Mobile Development",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Publicis Sapient",
        url: "https://www.publicissapient.com/",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://vivekmalhan-cb919.vercel.app/#website",
      url: "https://vivekmalhan-cb919.vercel.app/",
      name: `${profileData.name}'s Portfolio`,
      description: profileData.bio,
      publisher: {
        "@id": "https://vivekmalhan-cb919.vercel.app/#person"
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": "https://vivekmalhan-cb919.vercel.app/#webpage",
      url: "https://vivekmalhan-cb919.vercel.app/",
      name: `${profileData.name} — ${profileData.title}`,
      isPartOf: {
        "@id": "https://vivekmalhan-cb919.vercel.app/#website"
      },
      about: {
        "@id": "https://vivekmalhan-cb919.vercel.app/#person"
      },
      description: profileData.bio,
      inLanguage: "en-IN",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://vivekmalhan-cb919.vercel.app/#profilepage",
      url: "https://vivekmalhan-cb919.vercel.app/",
      name: `${profileData.name}'s Professional Portfolio`,
      mainEntity: {
        "@id": "https://vivekmalhan-cb919.vercel.app/#person"
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} dark`}
    >
      <head>
        {/* CHANGE: Enhanced JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* CHANGE: Add preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* CHANGE: Add favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* CHANGE: Add theme color for mobile browsers */}
        <meta name="theme-color" content="#09090f" />
        
        {/* CHANGE: Add geo meta tags for local SEO */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
      </head>
      <body className="relative min-h-screen antialiased">
        <CustomCursor />
        <ScrollProgressBar />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}