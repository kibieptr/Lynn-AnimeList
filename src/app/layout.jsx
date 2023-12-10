import "./globals.css";
import Navbar from "@/components/Navbar";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Lynn Anime - Indonesian Anime and Manga Hub",
  description: "Lynn Anime - Indonesian Anime and Manga Hub Website. Discover the pulse of Indonesian anime and manga at Lynn Anime, your go-to online community. Dive into the latest releases, engaging discussions, and a vibrant fan base. Join us now! created by Kibieptr",
  keywords: "Anime, Lynnanimelist, Anime News, Manga, Updated Anime Sites",
  author: "Kibieptr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
