import { ChevronLeft, Film, Clapperboard } from "lucide-react";
import categoriesData from "@/data/catagoriesData";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPoster } from "@/lib/tmdb/images";
import { getMoviesGenreList } from "@/lib/tmdb/movies";

export default async function page({ params }) {
  const { showall, details } = await params;
  const categories = await categoriesData();
  console.log(categories);
  const currentObj = categories.find((items) => {
    return showall === items.path;
  });
  console.log(currentObj);

  const currentData = currentObj.data.find(
    (items) => items.id === parseInt(details),
  );

  if (currentObj === undefined) {
    return notFound();
  }

  const genreIDs = await getMoviesGenreList();
  console.log(genreIDs);
  const moviesGenre = genreIDs.filter((items) => {
    return currentData.genre_ids.includes(items.id);
  });

  const imageSrc = getPoster(currentData.backdrop_path);
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70 "></div>

      <div className="absolute inset-0 z-10">
        <div className="h-30 flex items-center w-20 justify-center">
          <Link href={`/${showall}`}>
            <ChevronLeft size={40} />
          </Link>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex w-full justify-between">
            <div className="w-[30%] flex flex-col gap-12 ml-30">
              <h1 className="uppercase font-bold text-6xl">
                {currentData.type === "movies"
                  ? currentData.original_title
                  : currentData.name}
              </h1>

              <div className="flex font-bold gap-10 text-xl">
                <p>{currentData.vote_count} Votes</p>
                <p>
                  {currentData.type === "movies"
                    ? currentData.release_date
                    : currentData.first_air_date}
                </p>
                <p>
                  {currentData.vote_average}{" "}
                  <span className="bg-[#f5c518] text-black p-1 rounded-sm text-base">
                    IMDB
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-white/30 font-bold">GENRES</h1>
                <div className="flex gap-5 flex-wrap">
                  {moviesGenre.map((items, idx) => {
                    return (
                      <p
                        key={idx}
                        className="bg-white/10 p-[5px_25px] rounded-full"
                      >
                        {items.name}
                      </p>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-white/30 font-bold">DIRECTORS</h1>
                <p className="bg-white/10 p-[5px_25px] rounded-full w-40">
                  Not added
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-white/30 font-bold">CAST</h1>
                <div className="flex gap-5 flex-wrap">
                  <p>Not Added</p>
                </div>
              </div>

              <div>
                <h1 className="text-white/30 font-bold">SUMMARY</h1>
                <p>{currentData.overview}</p>
              </div>

              <div className="flex  gap-10">
                <button className="bg-white/10 p-[15px_25px] rounded-full flex items-center gap-2 font-bold">
                  <div>
                    <Clapperboard size={20} strokeWidth={1.5} />
                  </div>
                  <h1>Watch Trailer</h1>
                </button>
                <button className="bg-white/10 p-[15px_25px] rounded-full flex items-center gap-2 font-bold">
                  <div>
                    <Film size={20} strokeWidth={1.5} />
                  </div>
                  <h1>Watch Movie</h1>
                </button>
              </div>
            </div>

            <div className="w-[30%] bg-[#0b0b10c1] flex p-5 rounded-lg">
              <div className="border-b-2 border-white/30 h-10 w-full flex justify-center">
                <h1 className="font-bold text-2xl">LINKS</h1>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
