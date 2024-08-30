"use client";
import React, { useState } from 'react';
import Login from "@/components/Login/login";
import SplashScreen from '@/components/Splash/SplashScreen';
import Firstpage from '@/components/Landingpage/Firstpage';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    console.log("Loading finished");
    setIsLoading(false); 
  };

  return (
    <>
      {isLoading ? (
        <SplashScreen finishLoading={handleFinishLoading} />
      ) : (
        <>
          <Firstpage />
          
        </>
      )}
    </>
  );
}
