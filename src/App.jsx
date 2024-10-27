import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SecondSection from './components/SecondSection'
import Loop from './components/Loop/Loop'
import ThirdSection from './components/ThirdSection'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Loop/>
    <SecondSection/>
    <ThirdSection/>
    </>
  )
}

export default App