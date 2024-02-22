import React from 'react'
import { FaHeart } from "react-icons/fa";
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link';
import BestSellingCardAddtoCart from './bestSellingCardAddtoCart';

export default function BestSellingCard({ src, alt, title, description, price, category, slug, discount }: { src: string, alt: string, title: string, description: string, price: number, category: string, slug: string, discount: number|any }) {
    return (
        <div className="max-w-[350px] h-[31rem] mx-auto p-4 rounded-xl shadow-md relative group">
            <Link href={`/${category}/${slug}`}>
                {/* image div */}
                <div className='block relative h-[19rem] rounded-xl overflow-hidden'>
                    <Image
                        src={src}
                        alt={alt}
                        width={400}
                        height={400}
                    />
                </div>
                {/* typography */}
                <div className="mt-4">
                    {/* title */}
                    {title && (
                        <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight
                         first:mt-0 text-myBlackHead line-clamp-1">{title}</h2>)}
                    {/* description */}
                    {description && (<p className='scroll-m-20 border-b  text-sm font-semibold
                         tracking-tight first:mt-0 text-myBlackPara line-clamp-1'>
                        {description}
                    </p>)}
                    {/* price */}
                    {price && (
                        <div className='flex gap-2 '>
                            <p className={`scroll-m-20 border-b pt-2 text-base font-semibold tracking-tight
                         first:mt-0 text-myBlackHead line-clamp-1 ${discount > 0 && "line-through decoration-2 decoration-myOrange/70"}`}>
                                ${price}
                            </p>
                            {/* discount price */}
                            {discount > 0 && (<p className='scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight
                         first:mt-0 text-myBlackHead line-clamp-1 pt-2'>${price - ((price * discount) / 100)}</p>)}
                        </div>
                    )}
                </div>
            </Link>
            {/* button div */}
            <div>
                <div className=' absolute bottom-3 right-2 mr-2'>
                    <BestSellingCardAddtoCart slug={slug}/>
                </div>
                {/* <Button className='group bg-myBlackHead hover:bg-transparent text-white
                             hover:text-myBlackHead scroll-m-20 border-b pb-2 text-sm font-semibold
                             tracking-tight rounded-xl absolute bottom-3 right-2 mr-2'>
                    <BsCartFill className="mr-2 h-4 w-4  group-hover:text-myOrange duration-200" />
                    Add to Cart</Button> */}
                <Button className='group bg-myBlackHead hover:bg-transparent text-white
                             hover:text-myBlackHead scroll-m-20 border-b pb-2 text-sm font-semibold
                             tracking-tight rounded-xl absolute bottom-3 left-2 ml-2'>
                    <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-200" />
                    Buy Now</Button>
                {discount > 0 && (
                    <div className='scroll-m-20 text-sm text-white bg-myOrange  font-semibold 
                        tracking-tight border-none ml-1 absolute top-0 left-2 w-[80px] p-3 rounded-tl-xl rounded-bl-xl mybadge'>
                        {`${discount}% off`}
                    </div>
                )}
            </div>
        </div>
    )
}
