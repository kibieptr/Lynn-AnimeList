import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/utilities/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lynn-Anime",
  description: "Lynn Anime - Website Indonesia List Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
