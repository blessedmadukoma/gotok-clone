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

          <section className="min-h-screen w-full rounded-t-[40px] bg-[#fff9eb] px-28 text-center text-5xl text-[#888682]">
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
                <span className=" text-[#1b1b1e]">
                  on Amazon, PayPal, Netflix and anywhere online 🤯 🤩
                </span>
              </h4>
            </section>

            <section className="mt-20 grid gap-10 pb-20 text-left text-2xl text-gray-900 md:grid-cols-5 lg:grid-cols-5">
              <section className="space-y-4 rounded-3xl bg-white px-6 pt-6 md:col-span-3 lg:col-span-3">
                <h1 className="max-w-xs">
                  <span>Flexible </span>Funding Options
                </h1>
                <span className="w-[200px] font-labilgroteskRegular text-sm tracking-wide">
                  Funding ease at its best with gotok with multiple options
                  allowing users flexibility when it comes to financing their
                  purchases.
                </span>

                <div className="">
                  <button className="rounded-full bg-primary-purple p-4 font-labilgroteskRegular text-sm tracking-wider text-white">
                    Download Gotok
                  </button>
                </div>
                <div className="relative z-0">
                  <img
                    src="https://gotok.app/static/media/coin-features.64602ce92c43cce375922ffdc9b8603f.svg"
                    alt=""
                    className=" absolute right-0 top-0 z-50"
                  />

                  <img
                    src="https://gotok.app/static/media/card-funding.bb913fcf9bbb8d0d9a3e4521a2b1e5db.svg"
                    alt=""
                  />
                </div>
              </section>

              <section className="space-y-3 rounded-3xl bg-white px-6 pt-6 md:col-span-2 lg:col-span-2">
                <h2 className="text-gray-900">
                  Over <span>$4000</span> Daily Limit
                </h2>
                <div className="relative">
                  <span className="font-labilgroteskRegular text-sm">
                    The daily limit of over $4000 for transactions provides
                    users with a high level of flexibility when it comes to
                    making purchases
                  </span>

                  <img
                    src="https://gotok.app/static/media/paper-planes.861afa4f8519bb97c3ada96fdd5c2ddd.svg"
                    alt=""
                    className="absolute right-10 top-10 w-1/5"
                  />
                </div>

                <img
                  className="pt-10 font-labilgroteskRegular text-sm"
                  src="https://gotok.app/static/media/limit.c4bd5ebb758ebad6f38ae58e693226cc.svg"
                  alt="Gotok"
                />
              </section>

              <section className="space-y-3 rounded-3xl bg-white px-6 pt-6 md:col-span-2 lg:col-span-2">
                <h2 className="text-gray-900">
                  Create <span>Multiple Cards</span>
                </h2>

                <span className="font-labilgroteskRegular text-sm">
                  Say goodbye to the hassle of constantly canceling and
                  reissuing cards by creating virtual ones for specific
                  purposes.
                </span>

                <div className="">
                  <a
                    href="https://web.gotok.app"
                    className="rounded-full bg-gradient-to-r from-[#091c30] to-[#1b1144] px-5 py-3 font-labilgroteskRegular text-sm tracking-wider text-white"
                  >
                    Create an account
                  </a>
                </div>

                <div>
                  <img
                    src="https://gotok.app/static/media/card-multiple.560eff34a9eae69462827d1f08243b14.svg"
                    alt=""
                  />
                </div>
              </section>

              <section className="space-y-8 rounded-3xl bg-white pb-6 pt-6 md:col-span-3 lg:col-span-3">
                <div className="space-y-6 px-6 ">
                  <h1 className="max-w-xs">
                    Different
                    <span> Card Variants </span>
                  </h1>
                  <span className="w-[200px] font-labilgroteskRegular text-sm tracking-wide">
                    Master Card or Visa Choose from a variety of card options
                    that fit your unique style and needs
                  </span>
                </div>

                <div className="relative z-0">
                  <img
                    src="https://gotok.app/static/media/cards-variant.61b3422912e96d7768a92a35be5e5b40.svg"
                    alt=""
                  />
                </div>
              </section>
            </section>
          </section>
        </section>

        {/* Spend manage and pay section */}
        <section>
          {/* section: header */}
          <section className="mx-[6.8rem] my-8 w-full space-y-6 text-6xl md:grid  md:grid-flow-row md:grid-cols-[repeat(12,1fr)] md:grid-rows-[repeat(8,auto)] md:gap-2">
            <h3 className="col-start-2 col-end-[-1] row-start-1 row-end-3">
              Spend 💸
            </h3>{" "}
            <h3 className="col-start-3 col-end-[-1] row-start-3 row-end-3">
              <span>manage and pay</span> 🍿
            </h3>
            <h3 className="col-start-5 col-end-[-1] row-start-5 row-end-[8]">
              {" "}
              🛩️ bills with Gotok
            </h3>
          </section>
          {/* section */}
        </section>
      </div>
    </main>
  );
}
