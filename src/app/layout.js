// ...existing code...
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
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-transparent overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
// ...existing code...