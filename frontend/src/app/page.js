"use client"; 

import {useState,useEffect} from "react";

export default function Home() {
  const [message, setMessage] = useState(""); 
  
  // Function to change the value of state on  
  // click of button 
  const getWelcomeMessage = async () => { 

      const response = await fetch("/api");
      const data = await response.json();

      console.log(data);
  }; 
  
  useEffect(() => {
    getWelcomeMessage();
  },[] );
  
  return (
    <main >
      <div >
        <p>
          <code > hello world</code>
        </p>
      </div>
    </main>
  );
}
