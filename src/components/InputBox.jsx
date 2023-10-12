import React from 'react'

export default function InputBox({index,hover,color,bgcolor,opacity}) {
  return (
    <>
      <div className="flex m-4 ">
          <div className=" hover:text-white cursor-pointer  hover:bg-black h-32 w-32 mr-4 font-bold text-5xl text-center flex items-center justify-center rounded-full bg-white">
            <p>{index}</p>
          </div>
          <div className=  {`flex items-center mx-auto rounded-xl bg-white ${hover} ${color}  `} >
            <div className="">
              <img
                className= {` w-32 h-32 ml-2 rounded-xl ${bgcolor} ${opacity}`}
                src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg"
              />
            </div>
            <div className=" text-xl p-2 mr-12">
              <p className=" font-bold">Shabbir Anjum</p>
              <p className=" text-md">Content</p>
            </div>
          </div>
        </div>
    </>
  )
}
