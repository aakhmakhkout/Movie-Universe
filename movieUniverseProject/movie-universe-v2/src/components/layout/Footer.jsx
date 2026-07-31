import {Copyright} from 'lucide-react'

export default function Footer() {
  return (
    <div className='flex justify-center bg-[#3e245e29] rounded-t-xl'>
      <div className='flex items-center gap-1 font-bold'>
        <Copyright size={15} strokeWidth={1.5} />
        <h1 className='text-sm'>2026 Noumaan Nabi. All rights reserved.</h1>
      </div>
    </div>
  )
}
