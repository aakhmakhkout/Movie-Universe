import { catagories } from "@/data/catagoriesData"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default async function page({params}) {
  const {showall} = await params

  const catagory = catagories.find((items)=> {
    return items.path === showall
  })
  console.log(catagory)
  if(catagories.some((items)=> {return items.path === showall})) {
    return (
      <div className='flex flex-col w-full h-full justify-center'>
        <div className="h-15">
          <h1 className="capitalize font-bold text-3xl">{catagory.label}</h1>
        </div>
       <div className='grid grid-cols-7 gap-5 place-items-center place-content-center'>
         {catagory.data.map((items)=> {
          return <Link key={items.id} href={`${showall}/${items.slug}`} className='w-50 h-90 flex flex-col gap-2 cursor-pointer group/Card outline-none'>
          <div className='w-50 h-75 overflow-hidden rounded-xl group-hover/Card:border'>
            <Image src={items.cover} alt={items.title} className='w-full h-full'/>
          </div>          <div className='flex justify-center items-center'>
            <h1 className='text-white/70 group-hover/Card:text-white'>{items.title}</h1>
          </div>
        </Link>
      })}
      </div>
      </div>
    )
  }
  else {
    return notFound()
  }

}
