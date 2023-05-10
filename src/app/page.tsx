"use client";
import Header from "@/components/Header";
import Marquee from "react-fast-marquee";
import { isMobile } from "react-device-detect";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    isMobile ? "TrackIT is not supported on mobile devices." : "";
  }, []);

  if (isMobile) {
    return (
      <div className="grid min-h-screen place-items-center text-xs">
        This platform is only accessible using a PC.
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="bg-[#feebc7]">
        <section
          className="
          flex flex-col items-center space-y-10"
        >
          <Header />
          <section className="font-text text-sm  font-medium">
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
          <section className="flex items-center space-x-8 pb-10">
            <div className="relative">
              <div className="absolute left-[5px] top-1 z-[-1] h-full w-full rounded-[42px] bg-[#c9adff] content-['_']"></div>
              <a
                className="relative"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=app.gotok"
                rel="noreferrer"
              >
                <img
                  src="https://gotok.app/static/media/Google-play.a50e75e4cc3538a93a414b799c4e4caf.svg"
                  alt="Playstore download"
                />
              </a>
            </div>
            <div className="relative">
              <div className="absolute left-[5px] top-1 z-[-1] h-full w-full rounded-[42px] bg-[#c9adff] content-['_']">
                123
              </div>
              <a
                className="relative"
                target="_blank"
                href="https://apps.apple.com/ng/app/gotok/id6444884980"
                rel="noreferrer"
              >
                <img
                  src="https://gotok.app/static/media/Appstore.3c280081eab33d07e153f5c8d5bfd1aa.svg"
                  alt="Appstore download"
                />
              </a>
            </div>
          </section>
        </section>
        <section className="w-full rounded-t-[40px] bg-primary-purple pt-4 font-labilgroteskMedium text-xl text-white">
          <Marquee className="mb-6">
            <p className="mr-14 flex items-center space-x-1">
              <img src="./check-verified.svg" alt="Verified" />
              <span>Pay bills with Gotok ✨</span>
            </p>
            <p className="mr-14 flex items-center space-x-1">
              <img src="./check-verified.svg" alt="Verified" />
              <span>Easiest way to spend online ✨</span>
            </p>
            <p className="mr-14 flex items-center space-x-1">
              <img src="./check-verified.svg" alt="Verified" />
              <span>Refer a friend and get earn 25% ✨</span>
            </p>
            <p className="flex items-center space-x-1">
              <img src="./check-verified.svg" alt="Verified" />
              <span>Spend internationally with USD card ✨</span>
            </p>
          </Marquee>

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

              <section className="space-y-5 rounded-3xl bg-white px-6 pt-6 md:col-span-2 lg:col-span-2">
                <h2 className="text-gray-900">
                  Create <span>Multiple Cards</span>
                </h2>

                <span className="font-labilgroteskRegular text-sm">
                  Say goodbye to the hassle of constantly canceling and
                  reissuing cards by creating virtual ones for specific
                  purposes.
                </span>

                <div>
                  <a
                    href="https://web.gotok.app"
                    className="rounded-full bg-gradient-to-r from-[#091c30] to-[#1b1144] px-5 py-3 font-labilgroteskRegular text-sm tracking-wider text-white"
                  >
                    Create an account
                  </a>
                </div>

                <img
                  src="https://gotok.app/static/media/card-multiple.560eff34a9eae69462827d1f08243b14.svg"
                  alt=""
                  // className="absolute bottom-0"
                />
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

                <div className="relative flex flex-col items-center">
                  <img
                    src="https://gotok.app/static/media/lightening.f421e8282089ea967d11094220e3be90.svg"
                    alt=""
                    className="absolute -top-12 right-0 w-[19%]"
                  />
                  <img
                    src="https://gotok.app/static/media/cards-variant.61b3422912e96d7768a92a35be5e5b40.svg"
                    alt=""
                    className="w-9/12"
                  />
                </div>
              </section>
            </section>
          </section>
        </section>
        {/* Spend manage and pay section */}
        <section className="mx-[6.8rem] mb-16">
          {/* section: header */}
          <section className="my-8 w-full space-y-6 text-6xl md:mx-[6.8rem] md:grid  md:grid-flow-row md:grid-cols-[repeat(12,1fr)] md:grid-rows-[repeat(8,auto)] md:gap-2">
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

          <section className="mb-[3.2rem] max-w-3xl font-labilgroteskRegular text-[2rem] font-extrabold">
            <h3>
              Getting started on Gotok just takes just few steps. No hassles
            </h3>
          </section>

          {/* section */}
          <section className="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:space-x-10">
            <section className="relative flex max-h-[760px] flex-col items-start gap-11 overflow-hidden rounded-[40px] bg-[rgba(130,73,246,0.07)] px-14 py-[3.2rem]">
              <img
                src="https://gotok.app/static/media/howto-pattern-one.105c67f707d7c19ec589e1aa78382d02.svg"
                alt=""
                className="absolute -right-40 -top-36 w-full object-cover"
              />
              <img
                src="https://gotok.app/static/media/howto-pattern-one.105c67f707d7c19ec589e1aa78382d02.svg"
                alt=""
                className="absolute -right-20 w-full object-cover sm:-bottom-0 md:-bottom-48"
              />

              <div>
                <div className="space-y-6">
                  <h4 className="text-3xl">Get Started</h4>
                  <p className="font-RotundaRegular tracking-wide">
                    To create an account download the gotok app on mobile or
                    visit gotok.app on the web{" "}
                  </p>
                  <div className="flex space-x-6">
                    <div className="relative">
                      <div className="absolute left-[5px] top-1 z-[-1] h-full w-full rounded-[42px] bg-[#c9adff] content-['_']"></div>
                      <a
                        className="relative"
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=app.gotok"
                        rel="noreferrer"
                      >
                        <img
                          src="https://gotok.app/static/media/Google-play.a50e75e4cc3538a93a414b799c4e4caf.svg"
                          alt="Playstore download"
                          className=""
                        />
                      </a>
                    </div>
                    <div className="relative">
                      <div className="absolute left-[5px] top-1 z-[-1] h-full w-full rounded-[42px] bg-[#c9adff] content-['_']"></div>
                      <a
                        className="relative"
                        target="_blank"
                        href="https://apps.apple.com/ng/app/gotok/id6444884980"
                        rel="noreferrer"
                      >
                        {" "}
                        <img
                          src="https://gotok.app/static/media/Appstore.3c280081eab33d07e153f5c8d5bfd1aa.svg"
                          alt="Appstore download"
                          className=""
                        />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="pt-6">
                    <img
                      src="https://gotok.app/static/media/howtophone.66490c24fc0260859456.png"
                      alt=""
                      className="relative z-[100] ml-9 w-[95%]"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-y-6 text-center">
              <section className="relative items-center rounded-[40px] bg-[#fff8ee] bg-[rgba(130,73,246,0.071)] object-cover">
                <img
                  src="https://gotok.app/static/media/howto-pattern-two.722c307c47f1eeb3046e581cb2c7b431.svg"
                  alt="steps to download"
                  className="absolute -top-28 block"
                />
                <img
                  src="https://gotok.app/static/media/cards-stack.2d218ca777efb6dd6a3014bfbc656032.svg"
                  alt="steps to download"
                  className="relative top-0 ml-auto mr-auto block w-[50%]"
                />

                <div className="relative mx-10 mb-4 mt-10 text-center">
                  <h3 className="font-labilgroteskMedium text-2xl">
                    Create a USD Card
                  </h3>

                  <span className="font-RotundaLight tracking-wide">
                    Create and customize your card by choosing the variant that
                    fits your need
                  </span>
                </div>
              </section>

              <section className="flex-end relative flex flex-col items-center rounded-[40px] bg-[#fee] bg-[rgba(130,73,246,0.071)] object-cover">
                <div className="relative ml-auto mr-auto block w-[50%]">
                  <img
                    src="https://gotok.app/static/media/howto-pattern-three.c51e93bf38e7414c4ce1a552b183fc80.svg"
                    alt="steps to download"
                    // className=" relative ml-auto mr-auto block "
                  />
                </div>
                <img
                  src="https://gotok.app/static/media/cards-stack-glow.576d67c99689457630c8113d4fd2f6ce.svg"
                  alt="steps to download"
                  className="absolute top-0 ml-auto mr-auto block w-[60%]"
                />

                <div className="relative mx-10 mb-4  text-center">
                  <h3 className="font-labilgroteskMedium text-2xl">
                    Make Payments Online
                  </h3>

                  <span className="font-RotundaLight tracking-wide">
                    Load up your card and start making payment
                  </span>
                </div>
              </section>
            </section>
          </section>
        </section>

        {/* Don't just take our word for it */}
        <section className="rounded-t-[40px] bg-[#1b1b1e]">
          <section className="w-full space-y-6 px-[7rem] py-8 font-labilgroteskMedium text-xl text-white">
            <header className="space-y-4">
              <h3 className="font-labilgroteskMedium text-3xl font-medium">
                Don&apos;t just take our word for it
              </h3>
              <h3 className="font-RotundaRegular text-xl tracking-wide text-[#ffecc2]">
                Here is what our users think
              </h3>
            </header>

            {/* testimonials */}
            <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <section className="rounded-3xl bg-[#242328] p-7 font-RotundaRegular text-[14px]">
                <a
                  href="https://twitter.com/Nenyenwa0001/status/1608899589796679681?s=20&t=NLzNSPIhMEKOVBkRh4GU6w"
                  target="_blank"
                >
                  <header className="mb-3 flex flex-wrap space-x-4">
                    <div>
                      <img
                        src="https://pbs.twimg.com/profile_images/1609993854400299008/agvNhLHw_x96.jpg"
                        alt="twitter profile"
                        className="h-[56px] rounded-[10px]"
                      />
                    </div>
                    <span className="mx-[.8rem]">
                      <h5>0xTega.eth</h5>
                      <span>&#64;0xtega_</span>
                    </span>
                  </header>
                  <p className="tracking-wide text-[#afadb8]">
                    This is where @gotokhq comes 😎😎 You need no worry about
                    making international payments with any more @gotokhq gat you
                    covered
                  </p>
                </a>
              </section>

              <section className="rounded-3xl bg-[#242328] p-7 font-RotundaRegular text-[14px]">
                <a
                  href="https://twitter.com/ace_taze/status/1610779115468079106?s=46&t=YnDf4n0kdwuboUQPWTs_jg"
                  target="_blank"
                >
                  <header className="mb-3 flex space-x-4">
                    <div>
                      <img
                        src="https://pbs.twimg.com/profile_images/1623461797087924224/iq_dEPCu_x96.jpg"
                        alt="twitter profile"
                        className="h-[56px] rounded-[10px]"
                      />
                    </div>
                    <span>
                      <h5>𝚃𝚊𝚣𝚎🩺📊</h5>
                      <p>@ace_taze</p>
                    </span>
                  </header>
                  <p className="tracking-wide text-[#afadb8]">
                    @binance and @gotokhq literally blew my mind now. For months
                    I have been looking for a way to be making online payments
                    since most Nigerian cards cannot and it made me unable to
                    renew all my subscriptions. It was very sad
                  </p>
                </a>
              </section>

              <section className="rounded-3xl bg-[#242328] p-7 font-RotundaRegular text-[14px]">
                <a
                  href="https://twitter.com/TradewithTwiz/status/1615671312399355905"
                  target="_blank"
                >
                  <header className="mb-3 flex space-x-4">
                    <div>
                      <img
                        src="https://pbs.twimg.com/profile_images/1618357967715278855/h5m3Fb4B_x96.jpg"
                        alt="twitter profile"
                        className="h-[56px] rounded-[10px]"
                      />
                    </div>
                    <span>
                      <h5>Trader Twiz🧠🪔</h5>
                      <p>@TradewithTwiz</p>
                    </span>
                  </header>
                  <p className="tracking-wide text-[#afadb8]">
                    @gotokhq @phantom I love the solution you guys are building
                    and I’m definitely sharing the goodnews to everyone around
                  </p>
                </a>
              </section>

              <section className="rounded-3xl bg-[#242328] p-7 font-RotundaRegular text-[14px]">
                <a
                  href="https://twitter.com/ruthezimoha/status/1613844271060205568"
                  target="_blank"
                >
                  <header className="mb-3 flex space-x-4">
                    <div>
                      <img
                        src="https://pbs.twimg.com/profile_images/1542900175190081536/Akr8rOGA_x96.jpg"
                        alt="twitter profile"
                        className="h-[56px] rounded-[10px]"
                      />
                    </div>
                    <span>
                      <h5>Ruth</h5>
                      <p>@ruthezimoha</p>
                    </span>
                  </header>
                  <p className="tracking-wide text-[#afadb8]">
                    @gotokhq Gotok is definitely providing solutions
                  </p>
                </a>
              </section>

              <section className="rounded-3xl bg-[#242328] p-7 font-RotundaRegular text-[14px]">
                <a
                  href="https://twitter.com/Valenti21188631/status/1603106315093557249"
                  target="_blank"
                >
                  <header className="mb-3 flex space-x-4">
                    <div>
                      <img
                        src="https://pbs.twimg.com/profile_images/1611854279932788741/5KprvTa9_x96.jpg"
                        alt="twitter profile"
                        className="h-[56px] rounded-[10px]"
                      />
                    </div>
                    <span>
                      <h5>Valentine</h5>
                      <p>@Valenti21188631</p>
                    </span>
                  </header>
                  <p className="tracking-wide text-[#afadb8]">
                    I&apos;m glad using @gotokhq for my online shopping
                    transaction on Aliexpress, fast and reliable to use. All
                    thank to @EtudorM for the awareness and encouragement.
                  </p>
                </a>
              </section>

              <section className="rounded-3xl bg-[#242328] p-7 font-RotundaRegular text-[14px]">
                <a
                  href="https://twitter.com/Sk1_ll3/status/1654129610131402752?t=Qkos-RTT0xE-uxfL65ESVg&s=08"
                  target="_blank"
                >
                  <header className="mb-3 flex space-x-4">
                    <div>
                      <img
                        src="https://twitter.com/Sk1_ll3/photo"
                        alt="twitter profile"
                        className="h-[56px] rounded-[10px]"
                      />
                    </div>
                    <span>
                      <h5>Skillz.go🥷🏿</h5>
                      <p>@Sk1_ll3</p>
                    </span>
                  </header>
                  <p className="tracking-wide text-[#afadb8]">
                    Try Gotok, it works for me
                  </p>
                </a>
              </section>
            </section>
          </section>

          {/* FAQs */}
          <section className="w-full space-y-6 rounded-t-[52px] bg-[#fffbf2] px-[7rem] py-8 font-labilgroteskMedium text-3xl font-bold">
            <header className="space-y-4">
              <h3 className="max-w-[500px] font-labilgroteskMedium text-4xl font-medium">
                Frequently Asked Questions.
              </h3>
              <h3 className="font-RotundaRegular text-xl tracking-wide">
                Some of the most frequently asked questions.
              </h3>
            </header>
          </section>
        </section>
      </div>
    </main>
  );
}
