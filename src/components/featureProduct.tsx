"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellingCard from './bestSellingCard';
import { useAppSelector } from '@/app/store/hooks';


export default function FeatureProduct() {
  // my data
  const sellProducts = useAppSelector((state) => state.products.slice(0,9))
  // const sellProducts = [
  //   {
  //     src: "/assets/bluejeans.jpg",
  //     alt: "blue jeans",
  //     title: "Women Blue Jeans",
  //     description: "Best women blue jeans with high quality",
  //     price: 120,
  //     category: "pants",
  //     slug: "blue-jeans"

  //   },
  //   {
  //     src: "/assets/whitepant.jpg",
  //     alt: "white pant",
  //     title: "Women White Pant",
  //     description: "Best women white pant with soft stuff",
  //     price: 120,
  //     category: "pants",
  //     slug: "white-pant"
  //   },
  //   {
  //     src: "/assets/blackjeans.jpg",
  //     alt: "black jeans",
  //     title: "Women Black Jeans",
  //     description: "Best women black jeans with fantastic fabric",
  //     price: 120,
  //     category: "pants",
  //     slug: "black-jeans"
  //   },
  //   {
  //     src: "/assets/bluejeans.jpg",
  //     alt: "blue jeans",
  //     title: "Women Blue Jeans",
  //     description: "Best women blue jeans with high quality",
  //     price: 120,
  //     category: "pants",
  //     slug: "blue-jeans"

  //   },
  //   {
  //     src: "/assets/whitepant.jpg",
  //     alt: "white pant",
  //     title: "Women White Pant",
  //     description: "Best women white pant with soft stuff",
  //     price: 120,
  //     category: "pants",
  //     slug: "white-pant"
  //   },
  //   {
  //     src: "/assets/blackjeans.jpg",
  //     alt: "black jeans",
  //     title: "Women Black Jeans",
  //     description: "Best women black jeans with fantastic fabric",
  //     price: 120,
  //     category: "pants",
  //     slug: "black-jeans"
  //   },
  // ]
  // carousal setting
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div className='mb-[100px] mt-[100px]'>
      {/* heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-4 text-myBlackHead text-center">
          Featured Products
        </h1>
        <div className="flex mt-4 justify-center">
          <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* carousal */}
      <Slider {...settings}>
        {
          sellProducts.map((item:any, i) => (
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
      </Slider>
    </div>
  )
}
