import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import StoreHeader from "@/components/storeheader/StoreHeader";
import CategoryList from "@/components/category/CategoryList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data-Store",
  description: "Purchase Data Here",
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
          <section className="flex">
            <CategoryList />
            <main>{children}</main>
          </section>
        </body>
      </html>
    </ClerkProvider>
  );
}
