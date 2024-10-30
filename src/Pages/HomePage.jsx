import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Loop from '../components/Loop/Loop'
import Services from '../components/SecondSection';  // Assuming SecondSection refers to Services
import Websites from '../components/ThirdSection';  // Assuming ThirdSection refers to Websites
import About from '../components/FourthSection';    // Assuming FourthSection refers to About
import CommingSoon from '../components/FifthSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="services" >
        <Services />
      </section>

      <section id="websites" >
        <Websites />
      </section>

      <section>
        <Loop/>
      </section>

      <section id="about" >
        <About />
      </section>

      <section
        id="comingsoon...">
        <CommingSoon />
      </section>

      <Footer />
    </>
  );
};

export default Home;