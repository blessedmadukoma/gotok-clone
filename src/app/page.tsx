import Image from "next/image";

import Header from "@/components/Header";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // linear-gradient(90deg,#fee1a7 1px,transparent 0),linear-gradient(180deg,#fee1a7 1px,transparent 0);
    <main className="bg-[#feebc7] min-h-screen">
      <div className="space-y-10 flex flex-col items-center">
        <Header />

        <section className="font-text font-medium text-sm">
          <button className="py-1 flex text-center items-center justify-between rounded-full w-full bg-gradient-to-r from-[#6670f529] from-90deg to-[#fde3d8bf] to-70.02%">
            <span className="mx-1 ml-2 tracking-wider">
              Refer a friend & Get 25%
            </span>
            <span className="rounded-full bg-[#f8dacf] ml-2 mr-1 p-1 px-2 items-center text-center">
              →
            </span>
          </button>
        </section>
        <section className="space-y-6 text-center">
          <h2 className="font-labilgroteskMedium text-7xl text-center max-w-[860px] leading-[1.2]">
            Smart International Payments
          </h2>

          <h4 className="font-text tracking-widest text-2xl flex-wrap text-center">
            Spend, manage & pay bills worldwide with Gotok virtual cards
          </h4>
        </section>

        <section className="flex items-center space-x-8">
          <a
            href="https://play.google.com/store/apps/details?id=app.gotok"
            target="_blank"
          >
            <img src="./playstore.svg" alt="" />
          </a>
          <a
            href="https://apps.apple.com/ng/app/gotok/id6444884980"
            target="_blank"
          >
            <img src="./appstore.svg" alt="" />
          </a>
        </section>

        <section className="bg-primary-purple w-full rounded-t-[40px] text-white pt-4 text-xl overflow-x-hidden font-labilgroteskMedium">
          <section className="flex justify-evenly space-x-12 mb-6 mx-6 animate-marquee whitespace-nowrap">
            <span className="flex items-center space-x-1">
              <img src="./check-verified.svg" alt="Verified" />
              <span>Pay bills with Gotok ✨</span>
            </span>
            <span className="flex items-center space-x-1">
              <img src="./check-verified.svg" alt="Verified" />
              <span>Easiest way to spend online ✨</span>
            </span>
            <span className="flex items-center space-x-1">
              <img src="./check-verified.svg" alt="Verified" />
              <span>Refer a friend and get earn 25% ✨</span>
            </span>
            <span className="flex items-center space-x-1">
              <img src="./check-verified.svg" alt="Verified" />
              <span>Spend internationally with USD card ✨</span>
            </span>
          </section>

          <section className="w-full bg-white rounded-t-[40px] text-center text-4xl min-h-screen text-[#888682]">
            <section className="pt-8 px-12 text-left space-y-4">
              <h4 className="tracking-wide">
                Create a{" "}
                <span className="text-primary-purple">
                  dollar virtual card{" "}
                </span>
                💳 fund it from your 💼 bank, binance or solana wallet
              </h4>
              <h4>
                <span className="text-primary-purple">make payments </span>
                <span className="text-[#1b1b1e]">
                  on Amazon, PayPal, Netflix and anywhere online 🤯 🤩
                </span>
              </h4>
            </section>
          </section>
        </section>
      </div>
    </main>
  );
}
