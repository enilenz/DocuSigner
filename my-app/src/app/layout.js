import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Webviewer from "@/components/Webviewer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DocuSigner",
  description: "Annotste pdfs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <Webviewer/>
        {children}
      </body>
    </html>
  );
}
