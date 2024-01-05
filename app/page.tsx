import Image from 'next/image';

import Header from '@/components/header/header';
import Vision from '@/components/vision/vision';
import Products from '@/components/products/products';
import Benefits from '@/components/benefits/benefits';

import Navbar from '@/components/footer/navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Vision />
      <Products />
      <Benefits />
      

    </main>
  )
}
