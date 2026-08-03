import ContinueWatching from "@/components/HomeSections/ContinueWatching";
import OtherSections from "@/components/HomeSections/OtherSections";
import React from "react";
import { catagories } from "@/data/catagoriesData";
import Footer from "@/components/layout/Footer";
import { getTrendingMovies } from "@/lib/tmdb/movies";
import HeroSection from "@/components/HomeSections/heroSection/HeroSection";

export default async function page() {
  return (
    <div className="flex flex-col gap-5 w-full justify-center items-center">
      <section className="w-full h-full bg-[#0A0713] p-2 border border-white/20 rounded-lg">
        <HeroSection />
      </section>
      <section className="flex flex-col gap-5 bg-[#0A0713] w-full p-2 border border-white/20 rounded-lg">
        <ContinueWatching />

        {catagories.map((items) => {
          return (
            <section key={items.id} className=" w-full ">
              <OtherSections data={items} />
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
