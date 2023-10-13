import React from 'react'

export default function Card2() {
  return (
    <>
      <div className=' bg-white mt-6 text-center m-4 rounded-xl hover:bg-slate-500'>
  <div className="flex items-center justify-center text-base">
    <h4 className="font-semibold text-slate-900 text-center ">Contributors</h4>
    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
  </div>
  <div className="mt-3 -space-x-2 overflow-hidden p-2">
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="../src/images/shabbir.png" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/1750301/pexels-photo-1750301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/9663326/pexels-photo-9663326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/17815587/pexels-photo-17815587/free-photo-of-woman-in-flora-dress-sitting-at-table-in-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="../src/images/shabbir.png" alt=""/>
  </div>
  <div className="mt-3 text-sm font-medium">
    <a href="#" className="text-blue-500">+ 198 others</a>
  </div>
</div>
    </>
  )
}
