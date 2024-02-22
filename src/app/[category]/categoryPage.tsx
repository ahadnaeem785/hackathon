"use client"
import BestSellingCard from '@/components/bestSellingCard'
import { useAppSelector } from '../store/hooks'
export default function CategoryPage({params}:{params:{category:string}}) {
    const product = useAppSelector((state) => state.products)
    const sellProducts = product.filter((val) => val.category == params.category)
    // console.log(params.category)
    return (
        <div>
            {/* heading */}
            <div className="text-center mb-10">
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-4 text-myBlackHead">
                    {params.category}
                </h1>
                <div className="flex mt-4 justify-center">
                    <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
                </div>
            </div>
            {/* category page starts here */}
            <div className='flex flex-wrap justify-center gap-5'>
                {
                    sellProducts.map((item: any, i) => (
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
