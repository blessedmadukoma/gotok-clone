import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-labilgroteskBold text-2xl">Gotok</h1>
      <p className="font-labilgroteskRegular">Smart International Payments</p>
      <p className="font-labilgroteskMedium">
        Spend, manage & pay bills worldwide with Gotok virtual cards
      </p>
    </main>
  );
}
