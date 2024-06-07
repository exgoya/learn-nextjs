"use client"; 

import {useState,useEffect} from "react";
import Image from "next/image";

export default function Home() {
  const [message, setMessage] = useState(""); 
  
  // Function to change the value of state on  
  // click of button 
  const getWelcomeMessage = async () => { 

      const response = await fetch("/api");
      const data = await response.json();

      if(!response.ok){
        console.log("somthing messed up");
      }else{
        setMessage(data.message);
      }
  }; 
  
  useEffect(() => {
    getWelcomeMessage();
  },[] );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <code > {message}</code>
        </div>
    </main>
  );
}
