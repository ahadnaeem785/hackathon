"use client"
import React from 'react'
import BestSellingCard from './bestSellingCard'
import { useAppSelector } from '@/app/store/hooks'

// const sellProducts = [
//     {
//         src : "/assets/bluejeans.jpg",
//         alt : "blue jeans",
//         title : "Women Blue Jeans",
//         description : "Best women blue jeans with high quality",
//         price : 120,
//         category:"pants",
//         slug:"blue-jeans",
        

//     },
//     {
//         src : "/assets/whitepant.jpg",
//         alt : "white pant",
//         title : "Women White Pant",
//         description : "Best women white pant with soft stuff",
//         price : 120,
//         category:"pants",
//         slug:"white-pant"
//     },
//     {
//         src : "/assets/blackjeans.jpg",
//         alt : "black jeans",
//         title : "Women Black Jeans",
//         description : "Best women black jeans with fantastic fabric",
//         price : 120,
//         category:"pants",
//         slug:"black-jeans"
//     },
// ]

export default function BestSelling() {
    const product=useAppSelector((state) => state.products)
    const sellProducts = product.slice(0,4)
    return (
        <div className='mt-[100px] mb-[100px] ' id="products">
            {/* heading */}
            <div className="text-center mb-10">
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-4 text-myBlackHead">
                    Best Selling Products
                </h1>
                <div className="flex mt-4 justify-center">
                    <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
                </div>
            </div>
            {/* best selling products */}
            <div className='flex flex-wrap justify-center gap-5'>
            {
                sellProducts.map((item:any,i)=>(
                    <BestSellingCard 
                    key={i}
                    src={item.image[0]}
                    alt={item.title}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    category={item.category}
                    slug={item.slug}
                    discount={item.discount}
                    />
                ))
            }
            </div>
        
        </div>
    )
}
