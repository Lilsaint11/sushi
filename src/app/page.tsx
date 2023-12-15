import Image from 'next/image'
import Categories from './components/categories'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Services from './components/services'
import SpecialDishes from './components/specialDishes'
import Testimonials from './components/testimonials'

export default function Home() {
  return (
    <div className='px-20 py-5 flex flex-col gap-20'>
      <Header />
      <Hero />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  )
}
