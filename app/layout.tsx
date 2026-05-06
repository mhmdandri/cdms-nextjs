import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/ProgressProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Container Depot Management System",
  description:
    "CDMS is a comprehensive data management system designed to streamline the collection, organization, and analysis of data for research and clinical trials. It provides a secure and efficient platform for managing large volumes of data, ensuring data integrity and compliance with regulatory standards.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-screen antialiased ${inter.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <main className="flex-1">{children}</main>
          </Providers>
        </ThemeProvider>

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
