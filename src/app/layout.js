/* eslint-disable new-cap */
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Firebase Next.js Hackpack",
  description: "Firebase Setup Integration with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full h-screen flex flex-col justify-center items-center`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
