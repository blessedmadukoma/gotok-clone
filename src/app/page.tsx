import Image from "next/image";

import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#feebc7]">
      <div className="flex flex-col items-center space-y-10">
        <Header />

        <section className="font-text text-sm font-medium">
          <button className="from-90deg to-70.02% flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#6670f529] to-[#fde3d8bf] py-1 text-center">
            <span className="mx-1 ml-2 tracking-wider">
              Refer a friend & Get 25%
            </span>
            <span className="ml-2 mr-1 items-center rounded-full bg-[#f8dacf] p-1 px-2 text-center">
              →
            </span>
          </button>
        </section>
        <section className="space-y-6 text-center">
          <h2 className="max-w-[860px] text-center font-labilgroteskMedium text-7xl leading-[1.2]">
            Smart International Payments
          </h2>

          <h4 className="flex-wrap text-center font-text text-2xl tracking-widest">
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

        <section className="w-full overflow-x-hidden rounded-t-[40px] bg-primary-purple pt-4 font-labilgroteskMedium text-xl text-white">
          <section className="mx-6 mb-6 flex animate-marquee justify-evenly space-x-12 whitespace-nowrap">
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

          <section className="min-h-screen w-full rounded-t-[40px] bg-[#fff9eb] px-40 text-center text-5xl text-[#888682]">
            <section className="space-y-4 pt-8 text-left">
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

            <section className="mt-20 grid grid-cols-5 gap-10 text-left text-2xl">
              <section className="col-span-3 rounded-3xl bg-white p-4">
                <h1 className="w-[200px]">
                  <span>Flexible </span>Funding Options
                </h1>
                <span className="w-[200px]">
                  Funding ease at its best with gotok with multiple options
                  allowing users flexibility when it comes to financing their
                  purchases.
                </span>
              </section>
              <section className="col-span-2 rounded-3xl bg-white">2</section>
            </section>
          </section>
        </section>
      </div>
    </main>
  );
}
