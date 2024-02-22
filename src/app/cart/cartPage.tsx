"use client"
import React from 'react'
import CartCard from '@/components/cartCard'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '../store/hooks'

export default function CartPage() {
    const cartAray = useAppSelector((state) => state.cart);
    const total = cartAray.reduce((total, arr) => { return (total + ((arr.price - (arr.price * arr.discount) / 100) * arr.qty)) }, 0)
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1'>
            {/* items */}
            <div className='col-span-2'>
                <CartCard />
            </div>
            {/* order summary */}
            <div className='flex-shrink-0'>
                <div className='bg-myBlackHead/5 p-5 rounded-xl '>
                    {/* heading */}
                    <h2 className='scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myBlackHead'>Order Summary</h2>
                    {/* divider */}
                    <div className="divider mt-0 mb-1"></div>
                    {/* pricing */}
                    <div className='scroll-m-20 text-sm font-medium tracking-tight text-myBlackHead'>
                        {/* product price */}
                        <div className='flex items-center justify-between capitalize'>
                            <h2>sub total</h2>
                            <h2>${total}</h2>
                        </div>
                        {/* delivery charges */}
                        <div className='flex items-center justify-between capitalize'>
                            <h2>delivery charges</h2>
                            <h2>TBD</h2>
                        </div>
                        {/* sales tax*/}
                        <div className='flex items-center justify-between capitalize'>
                            <h2>sales tax</h2>
                            <h2>TBD</h2>
                        </div>
                    </div>
                    {/* divider */}
                    <div className="divider mt-0 mb-1"></div>
                    {/* estimate total */}
                    <div className='flex items-center scroll-m-20 text-sm font-semibold tracking-tight justify-between uppercase text-myBlackHead'>
                        <h2>estimated total</h2>
                        <h2>${total}</h2>
                    </div>
                    {/* divider */}
                    <div className="divider mt-0 mb-1"></div>
                    {/* checkout button */}
                    <div className='flex items-center justify-center w-full'>
                        <Button
                            className='uppercase bg-myBlackHead hover:bg-transparent duration-200 text-mywhite 
            hover:text-myBlackHead rounded-xl scroll-m-20 text-sm font-semibold tracking-tight hover:shadow-md'>
                            proceed to checkout
                        </Button>
                    </div>
                    {/* divider */}
                    <div className="divider mt-1 mb-1"></div>
                    <div>
                        {/* note */}
                        <p className='text-xs font-semibold tracking-tight capitalize text-myBlackHead w-[95%] text-center italic'>
                            {`* delivery charges and the sales tax will be calculated in the checkout page,Thankyou!`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
