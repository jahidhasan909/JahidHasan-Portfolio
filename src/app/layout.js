// ...existing code...
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Background from "@/components/Background";

import { ThemeProvider } from "@/components/ThemeProvider";
import AppWapperLoader from "@/components/AppWapperLoader";


const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://jahidhasan999.vercel.app"),

  title: "Jahid Hasan - Portfolio",
  description:
    "Frontend-Focused Junior Full-Stack Developer specializing in React, Next.js, and modern web applications.",

  openGraph: {
    title: "Jahid Hasan - Portfolio",
    description:
      "Frontend-Focused Junior Full-Stack Developer | React | Next.js | JavaScript | Node.js | MongoDB",
    url: "/",
    siteName: "Jahid Hasan Portfolio",
    images: [
      {
        url: "/jahidhasan.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jahid Hasan - Portfolio",
    description: "Frontend-Focused Junior Full-Stack Developer | React | Next.js",
    images: ["/jahidhasan.jpeg"],
  },
};
export default function RootLayout({ children }) {





  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-transparent overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppWapperLoader>

            <div className={`${inter.variable} ${poppins.variable} min-h-screen text-text-primary selection:bg-accent-blue/30 transition-colors duration-500`}>
              {/* background sits behind everything */}
              <Background />

              {/* main content placed above background */}
              <main className="relative z-10 min-h-screen">
                <CustomCursor />
                <SmoothScroll>
                  {children}
                </SmoothScroll>
              </main>
            </div>
          </AppWapperLoader>
        </ThemeProvider>
      </body>
    </html>
  );
}
// ...existing code...