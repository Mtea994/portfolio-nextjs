import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Imtinan - Senior Reactjs Developer",
    template: "%s | Imtinan - Senior Reactjs Developer",
  },
  // metadataBase: new URL("https://swajp.me"),
  description:
    "React js developer with more than 5 years of handson experience with building robust and functional ui's for large and small enterprises. get in touch with me",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <SpeedInsights />
      <body className={cn("h-full min-h-screen antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="mtea-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
