import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Background from "@/components/Background";


import { ThemeProvider } from "@/components/ThemeProvider";

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
  title: "Jahid Hasan | Portfolio",
  description: "Futuristic Web Developer Portfolio built with Next.js, GSAP, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-bg-primary overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className={`${inter.variable} ${poppins.variable} min-h-screen text-text-primary selection:bg-accent-blue/30 transition-colors duration-500`}>
            <Background />
            <CustomCursor />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

