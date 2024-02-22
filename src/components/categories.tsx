import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Categories() {
  return (
    <div className='mb-[100px] mt-[100px]'>
      {/* heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-4 text-myBlackHead">
          Categories
        </h1>
        <div className="flex mt-4 justify-center">
          <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* categories starts */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* pants */}
        <div className='mb-6 lg:mb-0 overflow-hidden mx-auto z-10 rounded-xl group relative'>
          <Link href={"/pant"}>
            <Image
              src={require("../../public/assets/c1.jpg")}
              alt='pant'
              width={400}
              height={400}
              className='rounded-xl duration-300 group-hover:scale-110 ' />
            <div className=' hidden lg:block absolute group-hover:bottom-6  duration-300 -bottom-20 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl
             text-center w-full text-mywhite bg-myBlackPara' >
              <h1
                className='uppercase'>Pants</h1>
            </div>
            <div className=' block lg:hidden absolute  bottom-24 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl
             text-center w-full text-mywhite bg-myBlackPara' >
              <h1
                className='uppercase'>Pants</h1>
            </div>
          </Link>
        </div>
        {/* shoes */}
        <div className='mb-6 lg:mb-0 overflow-hidden mx-auto z-10 rounded-xl group relative'>
          <Link href={"/shoes"}>
            <Image
              src={require("../../public/assets/c3.jpg")}
              alt='shoes'
              width={411}
              height={400}
              className='rounded-xl duration-300 group-hover:scale-110 ' />
            <div className=' hidden lg:block absolute group-hover:bottom-6 duration-300 -bottom-20 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl
             text-center w-full text-mywhite bg-myBlackPara' >
              <h1
                className='uppercase'>Shoes</h1>
            </div>
            <div className=' block lg:hidden absolute  bottom-24 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl
             text-center w-full text-mywhite bg-myBlackPara' >
              <h1
                className='uppercase'>Shoes</h1>
            </div>
          </Link>
        </div>
        {/* jewelry */}
        <div className='mb-6 lg:mb-0 overflow-hidden mx-auto z-10 rounded-xl group relative'>
          <Link href={"/jewelry"}>
            <Image
              src={require("../../public/assets/c2.jpg")}
              alt='jewelry'
              width={418}
              height={400}
              className='rounded-xl duration-300 group-hover:scale-110 ' />
            <div className=' hidden lg:block absolute group-hover:bottom-6 duration-300 -bottom-20 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl
             text-center w-full text-mywhite bg-myBlackPara' >
              <h1
                className='uppercase'>Jewelry</h1>
            </div>
            <div className=' block lg:hidden absolute  bottom-24 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl
             text-center w-full text-mywhite bg-myBlackPara' >
              <h1
                className='uppercase'>Jewelry</h1>
            </div>
          </Link>
        </div>
        {/* tops */}
        <div className='mb-6 lg:mb-0 overflow-hidden mx-auto z-10 rounded-xl group relative'>
          <Link href={"/tops"}>
            <Image
              src={require("../../public/assets/c4.jpg")}
              alt='tops'
              width={422}
              height={400}
              className='rounded-xl duration-300 group-hover:scale-110 ' />
            <div className=' hidden lg:block absolute group-hover:bottom-6 duration-300 -bottom-20 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl
             text-center w-full text-mywhite bg-myBlackPara' >
              <h1
                className='uppercase'>Tops</h1>
            </div>
            <div className=' block lg:hidden absolute  bottom-24 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl
             text-center w-full text-mywhite bg-myBlackPara' >
              <h1
                className='uppercase'>Tops</h1>
            </div>
          </Link>
        </div>


      </div>
    </div>
  )
}



