import Image from "next/image"
import {Play, X} from 'lucide-react'
import coe from "../../assets/continuewatching/classroomoftheelite.jpg"
import se from "../../assets/continuewatching/shadowsedge.jpeg"
import berlin from "../../assets/continuewatching/berlin.jpg"
import mouse from "../../assets/continuewatching/mouse.jpg"
import bm from "../../assets/continuewatching/bigmouth.jpg"

export default function ContinueWatching() {
    const ContinueWatchingData = [
        {
            id:1,
            section: "Continue Watching",
            coverImg: coe,
            title : "Classroom of the Elite"
        },
        {
            id:2,
            section: "Continue Watching",
            coverImg: se,
            title : "The Shadow's Edge"
        },
        {
            id:3,
            section: "Continue Watching",
            coverImg: berlin,
            title : "Berlin and the Lady with an Ermine"
        },
        {
            id:4,
            section: "Continue Watching",
            coverImg: mouse,
            title : "Mouse"
        },
        {
            id:5,
            section: "Continue Watching",
            coverImg: bm,
            title : "Big Mouth"
        },
    ]
  return (
    <div className="flex flex-col gap-5 mt-15">
        <div><h1 className="font-bold text-3xl">Continue Watching</h1></div>
        <div className="flex gap-10">
            {ContinueWatchingData.map((items)=> {
                return <div key={items.id} className="w-50 h-90 flex flex-col gap-2 cursor-pointer group">
                    <div className="w-full h-75 relative bg-black/20 overflow-hidden rounded-xl group-hover:border">
                    <div className="w-full h-full">
                        <Image src={items.coverImg} alt={items.title} className="w-full h-full"/>
                    </div>
                    <div className="absolute top-0 w-full h-full bg-black/20">
                    <div className="w-full h-full flex justify-center items-center">
                    <button className="border-2 border-white p-2 rounded-full playBtn group-hover:bg-[#22b365] group-hover:border-0 cursor-pointer"><Play size={36} strokeWidth={1.5} /></button>
                    </div>
                    </div>
                    <button className="absolute top-2 right-2 hidden group-hover:flex cursor-pointer bg-[#21213a] rounded-full p-1"><X size={20} strokeWidth={1.5} /></button>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1 className="text-center px-2 text-white/80 group-hover:text-white">{items.title}</h1>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}
