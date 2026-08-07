import categoriesData from "@/data/catagoriesData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPoster } from "@/lib/tmdb/images";

export default async function ShowAll({ params }) {
  const { showall } = await params;
  const categories = await categoriesData();
  const catagory = categories.find((items) => {
    return items.path === showall;
  });
  console.log(catagory);
  if (
    categories.some((items) => {
      return items.path === showall;
    })
  ) {
    return (
      <div className="flex flex-col w-full h-full justify-center">
        <div className="h-15">
          <h1 className="capitalize font-bold text-3xl">{catagory.label}</h1>
        </div>
        <div className="grid grid-cols-7 gap-5 place-items-center place-content-center">
          {catagory.data.map((items) => {
            const imageSrc = getPoster(items.poster_path);
            return (
              <Link
                key={items.id}
                href={`${showall}/${items.id}`}
                className="w-50 h-90 flex flex-col gap-2 cursor-pointer group/Card outline-none"
              >
                <div className="w-50 h-75 overflow-hidden rounded-xl group-hover/Card:border relative">
                  <Image
                    src={imageSrc}
                    alt={items?.media_type === "tv" ? items.name : items.title}
                    className="w-full h-full"
                    fill
                    sizes="10vw"
                  />
                </div>{" "}
                <div className="flex justify-center items-center">
                  {items?.media_type === "tv" ? (
                    <h1 className="text-white/70 group-hover/Card:text-white text-center">
                      {items.original_name}
                    </h1>
                  ) : (
                    <h1 className="text-white/70 group-hover/Card:text-white text-center">
                      {items.original_title}
                    </h1>
                  )}
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
