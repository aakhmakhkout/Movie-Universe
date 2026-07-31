import {
  House,
  Clapperboard,
  ScrollText,
  ListVideo,
  StarCheck,
} from "lucide-react";
import logo from "../../assets/logo3.png";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const sideBarTabs = [
    {
      id: 1,
      label: "Home",
      icon: <House size={30} strokeWidth={1.5} />,
      path: "/",
    },
    {
      id: 2,
      label: "Trending",
      icon: <Clapperboard size={30} strokeWidth={1.5} />,
      path: "/trending",
    },
    {
      id: 4,
      label: "Genres",
      icon: <ListVideo size={30} strokeWidth={1.5} />,
      path: "/genres",
    },
    {
      id: 3,
      label: "Watchlist",
      icon: <ScrollText size={30} strokeWidth={1.5} />,
      path: "/watchlist",
    },
    {
      id: 5,
      label: "Favorites",
      icon: <StarCheck size={30} strokeWidth={1.5} />,
      path: "/favorites",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-10 sticky top-0">
      <div className="w-35 h-20">
        <Image src={logo} alt="logo" className="w-40" />
      </div>

      <div className="h-150 w-full flex justify-center">
        <ul className="flex flex-col h-full justify-around gap-5">
          {sideBarTabs.map((items) => {
            return (
              <li
                key={items.id}
                className={`w-20 h-20 flex flex-col items-center justify-evenly rounded-xl hover:bg-white/10 transition-all ease-in sidetabs`}
              >
                <Link href={items.path} className="links">
                  {items.icon}
                </Link>
                <h1 className="opacity-0 text-sm">{items.label}</h1>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
