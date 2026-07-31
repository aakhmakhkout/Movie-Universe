import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from 'lucide-react'

export default function OtherSections({data}) {
  return (
    <div className='flex flex-col gap-5  group/Modal'>

      <div className='flex justify-between'>
        <h1 className='font-bold text-4xl'>{data.label}</h1>
        <Link href={data.path} className='px-5 hidden items-center hover:bg-black/20 rounded-full cursor-pointer group-hover/Modal:flex'><h1 className='text-lg'>See All</h1> <div><ChevronRight size={30} strokeWidth={1.5} /></div> </Link>
      </div>

      <div className='flex gap-10 overflow-x-scroll Cards'>
      {data.data.map((items)=> {
        return <Link key={items.id} href={`${data.path}/${items.slug}`} className='w-50 h-90 flex flex-col gap-2 cursor-pointer group/Card outline-none'>
          <div className='w-50 h-75 overflow-hidden rounded-xl group-hover/Card:border'>
            <Image src={items.cover} alt={items.title} className='w-full h-full'/>
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-white/70 group-hover/Card:text-white'>{items.title}</h1>
          </div>
        </Link>
      })}
      </div>
    </div>
  )
}
