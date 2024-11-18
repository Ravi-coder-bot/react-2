import { useEffect, useState } from "react";
import  Navbar  from "./components/Navbar/Navbar";
import Hero from  "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Testimony from "./components/Testimony/testimony";
import ContactList from "./components/ContactList/ContactList";
import Genai from "./components/Genai/Genai";




const App = () => {
  let heroData = [
    {text1:"One Brand",text2:"Two solution"},
    {text1:"Women",text2:"Safety app"},
    {text1:"Get Reward",text2:"On Tracking"},
  ]
  const [heroCount,setHeroCount] =  useState(0);
  const [playStatus,setPlayStatus] = useState(false);

 useEffect(()=>{
  setInterval(() => {
    setHeroCount((count)=>{return count===2?0:count+1})
  }, 3000);

  },[])
  return (
    <div>
      
      <Navbar/>
      <Hero
         setPlayStatus={setPlayStatus}
         heroCount={heroCount}
         heroData={heroData[heroCount]}
         setHeroCount={setHeroCount}
         playStatus={playStatus}
      />
     
      <Testimony/>
      <ContactList/>
      <Footer/>
    </div>
  )
}

export default App;
