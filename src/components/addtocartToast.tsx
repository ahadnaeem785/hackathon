"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import { BsCartFill } from "react-icons/bs";
import { addTocart } from "@/app/store/features/cart";
import { useAppDispatch } from '@/app/store/hooks';
export default function AddtocartToast({cartitem}:any) {
    const dispatch=useAppDispatch();
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
        <div className='w-fit' onClick={() => dispatch(addTocart(cartitem))}>
            {/* <button onClick={notify}>Notify!</button> */}
            <Button
                onClick={notify}
                className='group bg-myBlackHead hover:bg-transparent text-white
                 hover:text-myBlackHead scroll-m-20 border-b pb-2 text-sm font-semibold
                  tracking-tight rounded-xl mr-2'>
                <BsCartFill className="mr-2 h-4 w-4  group-hover:text-myOrange duration-200" />
                Add to Cart
            </Button>
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
