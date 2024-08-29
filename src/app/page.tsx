"use client";
import { useState } from 'react';
import Login from "@/components/Login/login";
import SplashScreen from '@/components/Splash/SplashScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false); // Update state to stop showing the splash screen
  };

  return (
    <>
      {isLoading ? (
        <SplashScreen finishLoading={handleFinishLoading} />
      ) : (
        <Login />
      )}
    </>
  );
}
