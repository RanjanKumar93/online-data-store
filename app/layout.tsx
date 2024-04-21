import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import StoreHeader from "@/components/storeheader/StoreHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Store",
  description: "Create and  sell data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <StoreHeader />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
