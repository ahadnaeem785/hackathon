import CategoryPage from "./categoryPage";

export default function Category({params}:{params:{category:string}}) {
//   const sellProducts = [
//     {
//       src : "/assets/bluejeans.jpg",
//       alt : "blue jeans",
//       title : "Women Blue Jeans",
//       description : "Best women blue jeans with high quality",
//       price : 120,
//       category:"pants",
//       slug:"blue-jeans"
//   },
//   {
//       src : "/assets/whitepant.jpg",
//       alt : "white pant",
//       title : "Women White Pant",
//       description : "Best women white pant with soft stuff",
//       price : 120,
//       category:"pants",
//       slug:"white-pant"
//   },
//   {
//       src : "/assets/blackjeans.jpg",
//       alt : "black jeans",
//       title : "Women Black Jeans",
//       description : "Best women black jeans with fantastic fabric",
//       price : 120,
//       category:"pants",
//       slug:"black-jeans"
//   },
// ]
  return (
    <div className='mt-[50px] mb-[100px]'>
      <CategoryPage params={params}/>
    </div>
  )
}
