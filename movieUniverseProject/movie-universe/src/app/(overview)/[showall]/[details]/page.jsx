import { detailedData } from "@/data/detailedData"
import { ChevronLeft, Film,  Clapperboard} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export default async function page({params}) {
  const {showall, details} = await params

  const currentObj = detailedData.find((items)=> {
    return items.slug === details
  })
 
  if(currentObj === undefined) {
    return notFound()
  }
  
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${currentObj.bg.src})`}}>
      <div className="absolute inset-0 bg-black/70 ">
      </div>

      <div className="absolute inset-0 z-10">

      <div className="h-30 flex items-center w-20 justify-center">
      <Link href={`/${showall}`}>
        <ChevronLeft  size={40}/>
      </Link>
      </div>

    <div className="w-full flex justify-center">
      <div className="flex w-full justify-between">
        <div className="w-[30%] flex flex-col gap-12 ml-30">
          <h1 className="uppercase font-bold text-6xl">{currentObj.title}</h1>

          <div className="flex font-bold gap-10 text-xl">
            <p>{currentObj.runtime} min</p>
            <p>{currentObj.releaseYear}</p>
            <p>{currentObj.rating} <span className="bg-[#f5c518] text-black p-1 rounded-sm text-base">IMDB</span></p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-white/30 font-bold">GENRES</h1>
            <div className="flex gap-5 flex-wrap">
            {currentObj.genre.map((items, idx)=> {
              return <p key={idx} className="bg-white/10 p-[5px_25px] rounded-full">{items}</p>
            })}
            </div>
          </div>


          <div className="flex flex-col gap-3">
            <h1 className="text-white/30 font-bold">DIRECTORS</h1>
            <p className="bg-white/10 p-[5px_25px] rounded-full w-40">{currentObj.directors}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-white/30 font-bold">CAST</h1>
            <div className="flex gap-5 flex-wrap">
            {currentObj.cast.map((items,idx)=> {
              return <p key={idx} className="bg-white/10 p-[5px_25px] rounded-full">{items}</p>
            })}
            </div>
          </div>

          <div>
            <h1 className="text-white/30 font-bold">SUMMARY</h1>
            <p>{currentObj.summary}</p>
          </div>

          <div className="flex  gap-10">
            <button  className="bg-white/10 p-[15px_25px] rounded-full flex items-center gap-2 font-bold">
            <div><Clapperboard size={20} strokeWidth={1.5} /></div>
            <h1>Watch Trailer</h1>
            </button>
            <button  className="bg-white/10 p-[15px_25px] rounded-full flex items-center gap-2 font-bold">
            <div><Film size={20} strokeWidth={1.5} /></div>
            <h1>Watch Movie</h1>
            </button>
          </div>
        </div>

        <div className="w-[30%] bg-[#0b0b10c1] flex p-5 rounded-lg">
          <div className="border-b-2 border-white/30 h-10 w-full flex justify-center">
          <h1 className="font-bold text-2xl">LINKS</h1>
          </div>
          <div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
