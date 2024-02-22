import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { BsCartFill } from "react-icons/bs";
import { Button } from './ui/button'
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addTocart } from "@/app/store/features/cart";

export default function BestSellingCardAddtoCart({ slug }: { slug: string }) {
    //calling products
    const product = useAppSelector((state) => state.products).find((val) => val.slug == slug)
    //add to cart
    const dispatch = useAppDispatch();
    //setting cart items
    const [cartitem, setCartitem] = useState({
        id: product?.id,
        title: product?.title,
        image: product?.image,   /* image[0] */
        slug: product?.slug,
        price: product?.price,
        discount: product?.discount,
        category: product?.category,
        size: product?.size[0],
        qty: product?.qty,
        color: product?.color[0]
    })
    //toast
    const notify = () => toast.success('Product Added to Cart', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return (
        <div >
            <Popover>
                <PopoverTrigger asChild>
                    <Button className='group bg-myBlackHead hover:bg-transparent text-white
                             hover:text-myBlackHead scroll-m-20 border-b pb-2 text-sm font-semibold
                             tracking-tight rounded-xl'>
                        <BsCartFill className="mr-2 h-4 w-4  group-hover:text-myOrange duration-200" />
                        Add to Cart</Button>
                </PopoverTrigger>
                <PopoverContent className="w-[14rem]">
                    {/* size */}
                    <div className="flex items-center">
                        <span className="mr-3 croll-m-20 text-base text-myBlackHead font-semibold tracking-tight">Size</span>

                        <div className="form-control w-full max-w-xs">
                            <select
                                onChange={(e) => setCartitem({ ...cartitem, size: e.target.value })}
                                className="select select-bordered">
                                <option disabled selected>Select Size</option>
                                {product?.size.map((item, i) => (
                                    <option key={i}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* colors */}
                    <div className="flex mt-4 space-x-1">
                        <span className="mr-3 croll-m-20 text-base text-myBlackHead font-semibold tracking-tight">Color</span>
                        {product?.color.map((item, i) => (
                            <button
                                onClick={() => setCartitem({ ...cartitem, color: item })}
                                key={i}
                                className="border-2 border-gray-300 rounded-full bg-red-700 w-6 h-6 active:border-black 
                                         focus:border-black "
                                style={{ backgroundColor: item }}
                            />
                        ))}
                    </div>
                    <div className="w-fit" onClick={notify}>
                    <Button
                        onClick={() => dispatch(addTocart(cartitem))}
                        className='group mt-4 w-full -mb-1 bg-myBlackHead hover:bg-transparent text-white
                             hover:text-myBlackHead scroll-m-20 border-b pb-2 text-sm font-semibold
                             tracking-tight rounded-xl'>
                        <BsCartFill className="mr-2 h-4 w-4  group-hover:text-myOrange duration-200" />
                        Add to Cart</Button>
                        </div>
                </PopoverContent>
            </Popover>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}
