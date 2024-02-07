import React from 'react'
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import SocialMediaSection from './SocialMediaSection';
import ContactForm from './ContactForm';
import Footer from './Footer';


const Home = () => {
  return (
    <>  
        <HeroSection/>
        <ProjectsSection />
        <SocialMediaSection />
        <ContactForm />
        <Footer />
    </>
  )
}

export default Home