"use client";
import FirstCard from "./components/FirstCard";
import Bottomcard from "./components/Bottomcard";
import Navbar from "./components/Navbar";
import Para from "./components/Para";
import Draf from "./components/Drag";
export default function Home() {
  return (
    <div>
     <Navbar/>
     <FirstCard/>
     <Para/>
     <Draf/>
    <Bottomcard/>
    </div>
   
    
  );
}
