import BestSelling from '@/components/bestselling'
import Categories from '@/components/categories'
import FeatureProduct from '@/components/featureProduct'
import Hero from '@/components/hero'
import Promotion from '@/components/promotion'
import Services from '@/components/services'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeatureProduct/>
      <Services/>
      <Promotion/>
      <Categories/>
      <BestSelling/>
    </div>
  )
}
