import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "APPOLLY | CHECKOUT OUR APP",
  description: "Explore a next-level experience with our innovative app! Elevate your daily routine with intuitive features, outstanding performance, and a user-friendly interface. Download now to enjoy unparalleled convenience and efficiency. The future is at your fingertips. Try it for free!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>{children}</body> 
    </html>
  );
}
