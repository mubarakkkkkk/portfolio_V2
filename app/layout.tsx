import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUBARAK | Software Engineer Portfolio",
  description:
    "Software Engineer specializing in React, Next.js, ReactNative, NodeJs, ExpressJs and building scalable & interactive web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}