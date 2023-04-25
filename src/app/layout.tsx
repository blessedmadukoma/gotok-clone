import "./globals.css";
// import { Rotunda } from 'next/font/google'

// const labilgrotesk =

export const metadata = {
  title: "Gotok",
  description: "Gotok is a fast way of handling Smart International Payments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
