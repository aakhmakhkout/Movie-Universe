import obsession from "../assets/Popular movies/obsession.jpg"
import backrooms from "../assets/Popular movies/backrooms.jpeg"
import avatar from "../assets/Popular movies/avatar.jpeg"
import hailmary from "../assets/Popular movies/hailmary.jpeg"
import superman from "../assets/Popular movies/superman.jpg"
import mortalkombat from "../assets/Popular movies/mortalkombat.jpeg"
import toystory from "../assets/Popular movies/toystory.jpg"
import minions from "../assets/Popular movies/minions.webp"

import fromSeries from "../assets/series/from.jpeg"
import airbender from "../assets/series/airbender.jpeg"
import got from "../assets/series/got.webp"
import hod from "../assets/series/hod.jpeg"
import iwfu from "../assets/series/iwillfindyou.jpeg"
import agency from "../assets/series/theagency.webp"
import bear from "../assets/series/thebear.jpeg"
import widowsbay from "../assets/series/widowsbay.jpeg"

import aot from "../assets/anime/aot.jpg"
import deathnote from "../assets/anime/deathnote.jpg"
import demonslayer from "../assets/anime/demonslayer.webp"
import hxh from "../assets/anime/hxh.jpeg"
import jjk from "../assets/anime/jjk.jpg"
import mha from "../assets/anime/mha.jpeg"
import onepiece from "../assets/anime/onepiece.jpeg"
import yourname from "../assets/anime/yourname.jpg"



export const popularMovies = [
    {
        id:1,
        title: "Obsession",
         slug: "obsession",
        cover: obsession
    },
    {
        id:2,
        title: "Backrooms",
         slug: "backrooms",
        cover: backrooms
    },
    {
        id:3,
        title: "Avatar - Fire and Ashes",
        slug: "avatarfireandashes",
        cover: avatar
    },
    {
        id:4,
        title: "Project Hail Mary",
         slug: "projecthailmary",
        cover: hailmary
    },
    {
        id:5,
        title: "Superman",
         slug: "superman",
        cover: superman
    },
    {
        id:6,
        title: "Mortal Kombat II",
         slug: "mortalkombatii",
        cover: mortalkombat
    },
    {
        id:7,
        title: "Toy Story 4",
         slug: "toystory4",
        cover: toystory
    },
    {
        id:8,
        title: "Minions and Monsters",
         slug: "minionsandmosters",
        cover: minions
    },

]

export const popularSeries = [
    {
        id:1,
        title: "From (Season 4)",
        slug: "from",
        cover: fromSeries
    },
    {
        id:2,
        title: "Avatar the Last Air Bender",
         slug: "avatarthelastairbender",
        cover: airbender
    },
    {
        id:3,
        title: "Game of Thrones",
        slug: "got",
        cover: got
    },
    {
        id:4,
        title: "House of Dragons",
         slug: "hod",
        cover: hod
    },
    {
        id:5,
        title: "I will find you",
         slug: "iwfu",
        cover: iwfu
    },
    {
        id:6,
        title: "The Agency",
         slug: "agency",
        cover: agency
    },
    {
        id:7,
        title: "The Bear",
         slug: "thebear",
        cover: bear
    },
    {
        id:8,
        title: "Widow's Bay",
         slug: "widowsbay",
        cover: widowsbay
    },

]

export const popularAnime = [
    {
        id:1,
        title: "Attack on Titan",
         slug: "attackontitan",
        cover: aot
    },
    {
        id:2,
        title: "Death Note",
         slug: "deathnote",
        cover: deathnote
    },
    {
        id:3,
        title: "Demon Slayer - Infinity Castle Arc",
         slug: "demonslayer-ica",
        cover: demonslayer
    },
    {
        id:4,
        title: "Hunter X Hunter",
        slug: "hxh",
        cover: hxh
    },
    {
        id:5,
        title: "Jujutsu Kaisen",
        slug: "jjk",
        cover: jjk
    },
    {
        id:6,
        title: "My Hero Academia",
        slug: "mha",
        cover: mha
    },
    {
        id:7,
        title: "One Piece",
        slug: "onepiece",
        cover: onepiece
    },
    {
        id:8,
        title: "Your Name",
        slug: "yourname",
        cover: yourname
    },

]

export  const catagories = [
    {
      id:1,
      label: "Movies - Popular",
      data: popularMovies,
      path: "popularmovies"
    },
    {
      id:2,
      label: "Series - Popular",
      data: popularSeries,
      path: "popularseries"
    },
    {
      id:3,
      label: "Anime - Popular",
      data: popularAnime,
      path: "popularanime"
    },

  ]

