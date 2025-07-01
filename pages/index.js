import { useState } from "react";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HeroTransition from '@/components/HeroTransition';
import styles from '@/styles/Home.module.css';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';
import PlusCard from "@/components/PlusCard"; 
import InfoCards from "@/components/InfoCards";



const Home = () => {


  return (
    <div className={styles.homeContainer}>
      <Navbar/>
      <Hero/>
      <HeroTransition/>
       <InfoCards/>
      <PlusCard/>
      <Faq/>
      <Footer/>
     
    </div>
    
  
    
  )
}

export default Home;