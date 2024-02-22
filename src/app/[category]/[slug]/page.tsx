import SlugPage from "./slugPage";

export default function Slug({ params }: { params: { slug: string } }) {
  console.log(params)
  return (
    <div>
      <SlugPage params={params}/>
    </div>
  )
}
