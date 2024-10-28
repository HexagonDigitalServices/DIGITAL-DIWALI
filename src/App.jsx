import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SecondSection from './components/SecondSection'
import Loop from './components/Loop/Loop'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import FifthSection from './components/FifthSection'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Loop/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <Footer/>
    </>
  )
}

export default App