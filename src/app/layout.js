import { Geist,DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700","600"], // choose what you need
  variable: "--font-dmSans"
});

export const metadata = {
  title: "Lasting Sales",
  description: "Lasting Sales CRM",
  icons: {
    icon: "/favicon.ico",   // standard browsers
    shortcut: "/logo.png",  // fallback
    apple: "/logo.png",     // iOS/Apple devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
