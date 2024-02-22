import React from 'react'

export default function Promotion() {
    return (
        <div className='mb-[100px] mt-[100px]'>
            {/* heading */}
            <div className="text-center mb-10">
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-4 text-myBlackHead">
                    Promotions
                </h1>
                <div className="flex mt-4 justify-center">
                    <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
                </div>
            </div>
            {/* promotion starts */}
            {/* promo-1 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <div className="hero promo-1 h-[24rem] rounded-xl" >
                    <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-2 text-mywhite uppercase">Get upto <span className='text-myOrange'>55%</span> off</h1>
                            <p className="text-mywhite scroll-m-20 text-lg font-medium tracking-tight capitalize">Flash Sale, get upto 55% off on the Season Variant</p>
                        </div>
                    </div>
                </div>
            {/* promo-2 */}
                <div className="hero promo-2 h-[24rem] rounded-xl" >
                    <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-2 text-mywhite uppercase">Get upto <span className='text-myOrange'>40%</span> off</h1>
                            <p className="text-mywhite scroll-m-20 text-lg font-medium tracking-tight capitalize">Flash Sale, get upto 40% off on Shoes</p>
                        </div>
                    </div>
                </div>
            {/* promo-3 */}
                 <div className="hero promo-3 h-[24rem] rounded-xl" >
                    <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-2 text-mywhite uppercase">Get upto <span className='text-myOrange'>30%</span> off</h1>
                            <p className="text-mywhite scroll-m-20 text-lg font-medium tracking-tight capitalize">Flash Sale, get upto 40% off on Jewelry Arrival</p>
                        </div>
                    </div>
                    
                </div>
            {/* promo-4 */}
                   <div className="hero promo-4 h-[24rem] rounded-xl" >
                    <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-2 text-mywhite uppercase">Get upto <span className='text-myOrange'>35%</span> off</h1>
                            <p className="text-mywhite scroll-m-20 text-lg font-medium tracking-tight capitalize">Flash Sale, get upto 40% off on Matching Tops</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
