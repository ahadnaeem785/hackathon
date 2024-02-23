"use client"
import Image from 'next/image'
import React from 'react'
import { FaHeart, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { Button } from './ui/button';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { addcart, delItem, subtractItem } from '@/app/store/features/cart';

export default function CartCard() {
    const cartAray = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    // console.log("hhh", cartAray)
    return (
        <div className='mb-8'>
        
            {cartAray.length >= 1 && cartAray.map((item, i) => (
                <div key={i} className='flex px-2 lg:px-10  mb-6 items-center'>
                    {/* image */}
                    <Image src={item.image[0]} alt={item.title} width={100} height={100} className='w-[130px] h-[150px] ' />
                    {/* info */}
                    <div className='flex justify-between items-center w-full px-5 '>
                        <div>
                            {/* title */}
                            <h2 className='lg:text-xl text-base font-semibold line-clamp-1 text-myBlackHead leading-none'>{item.title}</h2>
                            {/* size */}
                            <p className='lg:mt-2 mt-1 lg:text-base text-sm text-myBlackPara/75 font-semibold'>
                                Size:&nbsp;<span>{item.size}</span></p>
                            <p className='lg:mt-2 mt-1 lg:text-base text-sm text-myBlackPara/75 font-semibold'>
                                Color:&nbsp;<span>
                                    {<button

                                    key={i} className="border-2 border-gray-300 rounded-full h-3 w-3 lg:w-4 lg:h-4 active:border-none 
                                         focus:border-none cursor-none"
                                    style={{ backgroundColor: item.color }}
                                />}
                                </span></p>
                            {/* quantity */}
                            {/* less*/}
                            <div className='flex items-center lg:mt-2 mt-1'>
                                <Button
                                onClick={()=>dispatch(subtractItem(item
                                    ))}
                                    className='group bg-myBlackHead hover:bg-transparent text-white
                         hover:text-myBlackHead scroll-m-20 border-b lg:pb-2 text-sm font-semibold
                          tracking-tight rounded-xl mr-3 w-fit h-8 lg:h-fit'>
                                    <FaMinus 
                                    className="mr-2 h-2 w-2 lg:h-4 lg:w-4 group-hover:text-myOrange duration-200" />
                                    Less
                                </Button>
                                <div className='scroll-m-20 text-lg font-semibold tracking-tight text-myBlackPara/70'>{item.qty}</div>
                                {/* add */}
                                <Button
                                onClick={()=>dispatch(addcart(item))}
                                    className='group bg-myBlackHead hover:bg-transparent text-white
                         hover:text-myBlackHead scroll-m-20 border-b lg:pb-2 text-sm font-semibold
                          tracking-tight rounded-xl ml-3 w-fit h-8 lg:h-fit'>
                                    <FaPlus className="mr-2 h-2 w-2 lg:h-4 lg:w-4  group-hover:text-myOrange duration-200" />
                                    Add
                                </Button>
                            </div>
                            {/* price and delete */}
                            <div className='block lg:hidden flex-col items-end '>
                                <h3 className='text-sm mt-2 font-semibold leading-none line-clamp-1 text-myBlackHead '>
                                    <span>Price:&nbsp;</span>
                                    &#36;{item.discount > 0 ?
                                        (item.price - (item.price * item.discount) / 100) * item.qty
                                        : item.price * item.qty
                                    }
                                </h3>
                                <FaTrash 
                                onClick={()=>dispatch(delItem(item.uuid))}
                                className="text-base mt-2 font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    {/* price and delete */}
                    <div className=' hidden lg:flex flex-col items-end gap-5'>
                        <h3 className='text-lg  font-semibold leading-none line-clamp-1 text-myBlackHead '>
                            <span>Price:&nbsp;</span>
                            &#36;{item.discount > 0 ?
                                (item.price - (item.price * item.discount) / 100) * item.qty
                                : item.price * item.qty
                            }
                        </h3>
                        <FaTrash 
                        onClick={()=>dispatch(delItem(item.uuid))}
                        className="text-lg font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
                    </div>
                </div>
            ))}
        </div>
    )
}
