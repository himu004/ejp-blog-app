import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "EJP - Blog App",
  description: "Blog App built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <>
      <AuthProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Navbar />
            {children}
          </body>
        </html>
      </AuthProvider>
    </>
  );
}
