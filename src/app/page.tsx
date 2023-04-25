import Image from "next/image";

import Header from "@/components/Header";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="bg-[#feebc7] min-h-screen">
      <div className="space-y-6 flex flex-col items-center">
        <Header />

        {/* bg-gradient-to-r from-[#6670f529] from-90deg to-[#fde3d8bf] to-70.02%
linear-gradient(90deg,, 70.02%) */}
        <section className="font-text font-medium text-sm">
          <button className="py-1 flex text-center items-center justify-between rounded-full w-full bg-gradient-to-r from-[#6670f529] from-90deg to-[#fde3d8bf] to-70.02%">
            <span className="ml-2">Refer a friend & Get 25%</span>
            <span className="rounded-full bg-[#f8dacf] mr-2 p-1 px-2 items-center text-center">
              →
            </span>
          </button>
        </section>
      </div>
    </main>
  );
}
