import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ClickSpark";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aradhy Shrestha | Developer Portfolio",
  description: "Explore Aradhy Shrestha's portfolio featuring modern web development, creative digital experiences, projects, and technologies.",
  other: {
    "p:domain_verify": "269ea322a1cd524e6d2e7bfc213be362",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col">
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
