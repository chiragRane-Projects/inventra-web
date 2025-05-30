import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Invnetra",
  description: "Inventra is a modern inventory management system built with 💚 FastAPI and secured using JWT. Designed for small-to-mid shops, it offers full-featured web & mobile apps (React Native + Next.js) for managing stock, tracking logs, and analyzing reports with Pandas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
