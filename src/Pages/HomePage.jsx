import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/SecondSection';  // Assuming SecondSection refers to Services
import Websites from '../components/ThirdSection';  // Assuming ThirdSection refers to Websites
import About from '../components/FourthSection';    // Assuming FourthSection refers to About
import CommingSoon from '../components/FifthSection'; 
import Footer from '../components/Footer';          

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* Services Section */}
      <section id="services" >
        <Services />
      </section>

      {/* Websites Section */}
      <section id="websites" >
        <Websites />
      </section>

      {/* About Section */}
      <section id="about" >
        <About />
      </section>

      {/* Coming Soon Section */}
      <section
        id="comingsoon..."
        
      >
       <CommingSoon/>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
