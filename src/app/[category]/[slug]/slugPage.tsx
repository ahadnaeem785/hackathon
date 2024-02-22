"use client"
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import SlugComponent from '@/components/slugComponent';
import { Button } from '@/components/ui/button'
import { useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import AddtocartToast from "@/components/addtocartToast";

export default function SlugPage({ params }: { params: { slug: string } }) {
    const product = useAppSelector((state:any) => state.products)
    const slug = product.filter((val:any) => val.slug == params.slug)
    // console.log("abc", slug)
    // const dispatch=useAppDispatch();
    const [cartitem, setCartitem] = useState({
        id: slug[0].id,
        title: slug[0].title,
        image: slug[0].image,   /* image[0] */
        slug: slug[0].slug,
        price: slug[0].price,
        discount: slug[0].discount,
        category: slug[0].category,
        size: slug[0].size[0],
        qty: slug[0].qty,
        color: slug[0].color[0]
    })
    // console.log(cartitem)
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
                        {/* image */}
                        <SlugComponent image={slug[0].image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6  lg:mt-0">
                            {/* BRAND NAME */}
                            <h2 className="scroll-m-20 mt-8 text-base font-semibold tracking-tight text-gray-500 uppercase ">
                                {slug[0].category}
                            </h2>
                            {/* title */}
                            <h1 className="scroll-m-20 mt-2 text-3xl font-semibold tracking-tight first:mt-0 mb-1 text-myBlackHead">
                                {slug[0].title}
                            </h1>
                            {/* ratings */}
                            <div className="rating rating-sm mt-2">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                            </div>
                            {/* description */}
                            <p className="leading-relaxed scroll-m-20 text-base font-normal tracking-tight mt-2">
                                {slug[0].description}
                            </p>
                            <div className="flex mt-6 items-center mb-6">
                                {/* colors */}
                                <div className="flex">
                                    <span className="mr-3 croll-m-20 text-base text-myBlackHead font-semibold tracking-tight">Color</span>
                                    {slug[0].color.map((item:any, i:number) => (
                                        <button
                                            onClick={() => setCartitem({ ...cartitem, color: item })}
                                            key={i} className="border-2 border-gray-300 rounded-full w-6 h-6 active:border-black 
                                         focus:border-black "
                                            style={{ backgroundColor: item }}
                                        />
                                    ))}
                                </div>
                                {/* size */}
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3 croll-m-20 text-base text-myBlackHead font-semibold tracking-tight">Size</span>

                                    <div className="form-control w-full max-w-xs">
                                        <select
                                            onChange={(event) => setCartitem({ ...cartitem, size: event.target.value })}
                                            // onClick={(event) => console.log({ ...cartitem,event})}
                                            className="select select-bordered">
                                            {/* <option disabled selected>Select Size</option> */}
                                            {slug[0].size.map((item:any, i:number) => (
                                                <option key={i}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* quantity */}
                            <div className='flex items-center'>
                                <span className="mr-3 croll-m-20 text-base text-myBlackHead font-semibold tracking-tight">Quantity</span>
                                {/* less*/}
                                <Button
                                    onClick={() => setCartitem({ ...cartitem, qty: cartitem.qty <= 1 ? 1 : --cartitem.qty })}
                                    className='group bg-myBlackHead hover:bg-transparent text-white
                 hover:text-myBlackHead scroll-m-20 border-b pb-2 text-sm font-semibold
                  tracking-tight rounded-xl mr-3 ml-2 w-fit h-fit'>
                                    <FaMinus className="mr-2 h-4 w-4  group-hover:text-myOrange duration-200" />
                                    Less
                                </Button>
                                <div className='scroll-m-20 text-lg font-semibold tracking-tight'>{cartitem.qty}</div>
                                {/* add */}
                                <Button
                                    onClick={() => setCartitem({ ...cartitem, qty: ++cartitem.qty })}
                                    className='group bg-myBlackHead hover:bg-transparent text-white
                 hover:text-myBlackHead scroll-m-20 border-b pb-2 text-sm font-semibold
                  tracking-tight rounded-xl mr-2 ml-3 w-fit h-fit'>
                                    <FaPlus className="mr-2 h-4 w-4  group-hover:text-myOrange duration-200" />
                                    Add
                                </Button>
                            </div>
                            {/* divider */}
                            <div className="divider"></div>
                            {/* price */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className={`scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0 mb-1 text-myBlackHead ${slug[0].discount && "line-through decoration-2 decoration-myOrange"}`}>
                                        ${cartitem.price * cartitem.qty}
                                    </span>
                                    {/* discount price */}
                                    {cartitem.discount > 0 && (<span className='scroll-m-20 pl-4 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0 mb-1 text-myBlackHead'>${(cartitem.price - (cartitem.price * cartitem.discount) / 100) * cartitem.qty}</span>)}
                                </div>
                                {/* add to cart */}
                                {/* <Button
                                onClick={()=>dispatch(addTocart(cartitem))}
                                    className='group bg-myBlackHead hover:bg-transparent text-white
                 hover:text-myBlackHead scroll-m-20 border-b pb-2 text-sm font-semibold
                  tracking-tight rounded-xl mr-2'>
                                    <BsCartFill className="mr-2 h-4 w-4  group-hover:text-myOrange duration-200" />
                                    Add to Cart
                                </Button> */}
                                <AddtocartToast cartitem={cartitem}/>
                                {/* buy now */}
                            </div>
                            <Button
                                className='group bg-myBlackHead hover:bg-transparent text-white
                   hover:text-myBlackHead scroll-m-20 border-b pb-2 text-sm font-semibold
                   tracking-tight rounded-xl w-full mt-4 ml-2 '>
                                <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-200" />
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}
