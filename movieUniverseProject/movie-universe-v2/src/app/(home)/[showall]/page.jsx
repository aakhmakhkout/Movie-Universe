import categoriesData from "@/data/catagoriesData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPoster } from "@/lib/tmdb/images";
import { Star } from "lucide-react";

export default async function ShowAll({ params }) {
  const { showall } = await params;
  const categories = await categoriesData();
  const category = categories.find((items) => {
    return items.path === showall;
  });
  if (
    categories.some((items) => {
      return items.path === showall;
    })
  ) {
    console.log(category);

    return (
      <div className="flex flex-col w-full h-full justify-center">
        <div className="h-15">
          <h1 className="capitalize font-bold text-3xl">{category.label}</h1>
        </div>
        <div className="grid grid-cols-6 gap-5 place-items-center place-content-center">
          {category.data.map((items) => {
            const imageSrc = getPoster(items.poster_path);
            return (
              <Link
                href={`${category.path}/${items.id}`}
                key={items.id}
                className="bg-[#151515] w-65 min-h-110 gap-5  shadow-md overflow-hidden"
              >
                <div className="relative w-65 h-95 ">
                  <Image
                    src={imageSrc}
                    alt={
                      category.type === "movies"
                        ? items.original_title
                        : items.name
                    }
                    className="w-full h-full object-cover"
                    fill
                    sizes="20vw"
                  />
                </div>
                <div className="flex justify-center items-center min-h-10 ">
                  <h1 className="font-bold text-center">
                    {category.type === "movies"
                      ? items.original_title
                      : items.name}
                  </h1>
                </div>
                <div className="flex items-center justify-evenly text-sm text-white/70">
                  <div className="flex gap-1">
                    <p className="text-[#e2b616]">
                      <Star size={18} />
                    </p>
                    <p>{items.vote_average}</p>
                  </div>
                  <p>{items.vote_count} Votes</p>
                  <p>
                    {category.type === "movies"
                      ? items.release_date
                      : items.first_air_date}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return notFound();
  }
}
