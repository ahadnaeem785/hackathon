import React from 'react'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'
import { GiShoppingBag } from "react-icons/gi";
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='mb-[100px] -mt-3'>
      <div className="hero min-h-[90vh] custom-image bg-fixed bg-center bg-no-repeat"  >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-3 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Futuristic <span className='text-myOrange'> Clothes</span></h1>
      <p className="mb-5 text-lg text-mywhite">Upgrade your wardrobe with sleek & stylish Apparels and Top-Match shoes & Acessories</p>
      <Link href={"#products"}>
      <Button 
      className='bg-myBlackPara hover:bg-myBlackHead rounded-full py-6 px-6 
      outline outline-offset-2 outline-1 text-mywhite text-lg
      group hover:outline-myOrange hover:text-myOrange hover:duration-200'>
      <GiShoppingBag className="mr-2 h-5 w-5 group-hover:text-myOrange group-hover:animate-bounce group-hover:duration-200" />  Shop Now
    </Button>
    </Link>
    </div>
  </div>
</div>
    </div>
  )
}
