import type { Metadata } from "next";
import "./globals.css";
import { ThemeWrapper } from "@/components/main/ThemeProvider";
import { inter } from "@/utils/font";


export const metadata: Metadata = {
  title: "AnimateX Pro",
  description: "=Pre built motion components built with framer motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
       <ThemeWrapper>
          {children}
       </ThemeWrapper>
      </body>
    </html>
  );
}
