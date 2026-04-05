import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import HowItWorks from '../components/home/HowItWorks'
import TemplatesShowcase from '../components/home/TemplatesShowcase'
import Testimonial from '../components/home/Testimonial'
import Pricing from '../components/home/Pricing'
import FAQ from '../components/home/FAQ'
import CallToAction from '../components/home/CallToAction'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div style={{ background: '#0A0A0F' }}>
      <Banner />
      < Hero />
      <Features />
      <HowItWorks />
      <TemplatesShowcase />
      <Testimonial />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home