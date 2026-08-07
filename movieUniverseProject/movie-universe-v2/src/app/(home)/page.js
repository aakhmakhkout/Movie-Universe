import ContinueWatching from "@/components/HomeSections/ContinueWatching";
import OtherSections from "@/components/HomeSections/OtherSections";
import React, { Suspense } from "react";
import categoriesData from "@/data/catagoriesData";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/HomeSections/heroSection/HeroSection";

export default async function page() {
  const categories = await categoriesData();
  console.log(categories);
  return (
    <div className="flex flex-col gap-5 w-full justify-center items-center">
      <section className="w-full h-full bg-[#0A0713] p-2 border border-white/20 rounded-lg">
        <HeroSection />
      </section>
      <section className="flex flex-col gap-5 bg-[#0A0713] w-full p-2 border border-white/20 rounded-lg">
        <ContinueWatching />

        {categories.map((items) => {
          return (
            <section key={items.id} className=" w-full ">
              <Suspense fallback={"loading"}>
                <OtherSections data={items} />
              </Suspense>
            </section>
          );
        })}
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
