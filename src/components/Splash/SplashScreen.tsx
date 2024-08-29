"use client";
import React, { useEffect } from 'react';
import anime from 'animejs';
import Image from 'next/image';
import company from "../../../public/company.png";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  useEffect(() => {
    const animate = () => {
      anime.timeline({
        complete: () => finishLoading(), // Calls finishLoading after animation
      })
      .add({
        targets: '#logo',
        delay: 0,
        duration: 3000,
        easing: 'easeInOutExpo',
      });
    };

    animate();
  }, [finishLoading]);

  return (
    <div className='flex h-screen w-screen items-center justify-center overflow-hidden'>
      <div className="relative w-full h-full">
        <Image
          id="logo"
          src={company}
          alt="Brand Logo"
          className="object-cover w-full h-full"
          
        />
      </div>
    </div>
  );
};

export default SplashScreen;
