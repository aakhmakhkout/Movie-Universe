import ContinueWatching from '@/components/HomeSections/ContinueWatching'
import OtherSections from '@/components/HomeSections/OtherSections'
import React from 'react'
import { catagories } from '@/data/catagoriesData'
import Footer from '@/components/layout/Footer'

export default function page() {
 
  return (
    <div className='flex flex-col gap-10 overflow-hidden'>
      <section>
        <ContinueWatching />
      </section>
        {catagories.map((items)=> {
        return <section key={items.id}>
          <OtherSections data={items}/>
        </section>
        })}
         <footer>
            <Footer />
          </footer>
    </div>
  )
}
