"use client"
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

export default function SlugComponent({ image }: string | string[] | StaticImageData | any) {
  const [path, setPath] = useState("")
  // console.log(image)
  return (
    <div>
      <Image src={path ? path : image[0]} alt='image' width={400} height={400} className='rounded-xl border-2 cursor-pointer hover:border-myBlackHead' />
      <div className='flex items-center justify-evenly mx-auto mt-2 cursor-pointer'>
        {image.map((item:any, i:any) => (
          <div key={i}>
            <Image src={item} alt='image' width={60} height={60} className='rounded-xl border-2 hover:border-myBlackHead' onClick={() => setPath(item)} />
          </div>

        ))}

      </div>
    </div>
  )
}
