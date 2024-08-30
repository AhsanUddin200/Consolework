import React, { useState } from 'react';
import Image from 'next/image';
import imageSrc from '../../../public/image.png';

export default function Firstpage() {
  const [showImage, setShowImage] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [showText, setShowText] = useState(false);

  const ImageOpen = () => {
    setShowImage(true);
    setShowButtons(false);

    setTimeout(() => {
      setShowImage(false);
      setShowText(true);
    }, 3000);
  };

  return (
    <div className='flex flex-col min-h-screen items-center justify-center relative'>
      {showButtons && (
        <div className='flex justify-between gap-24'>
          <button
            className='bg-black text-white px-4 py-1 rounded-sm font-semibold'
            onClick={ImageOpen}
          >
            Community Opportunities
          </button>
          <button className='bg-black text-white px-4 py-1 rounded-sm font-semibold'>
            Company Resources
          </button>
        </div>
      )}
      {showImage && (
        <div className='w-full h-full mt-8'>
          <Image
            src={imageSrc}
            alt="Community Opportunities"
            layout='fill'
            objectFit='cover'
          />
        </div>
      )}
      {showText && (
        <div className='absolute top-0 left-0 w-full p-4 bg-white'>
          <h1 className='text-center text-2xl font-bold mb-2'>
            By Invitation Only: Join the ParkingNSites POC!
          </h1>
          <p className=' mb-4 '>Share Your Experience with Accessible Parking</p>
          <p className=' mb-4 '>Share your contact info with us, and we'll reach out to you with an exclusive invitation with next steps!</p>

          <form className='flex flex-row gap-4 items-center'>
            <label className='mb-2'>
            <span className='mr-2'>Name:<span className='text-red-700'>*</span></span>
              <input
                type='text'
                name='name'
                className='border '
                required
                placeholder='Enter your name'
              />
            </label>
            <label className='mb-2'>
            <span className='mr-2'>Email:<span className='text-red-700'>*</span></span>
              <input
                type='email'
                name='email'
                className='border'
                required
                placeholder='Enter your email'
              />
            </label>
            <label className='mb-2'>
            <span className='mr-2'>Phone Number:<span className='text-red-700'>*</span></span>
              <input
                type='tel'
                name='phone'
                className='border'
                required
                 placeholder='Enter your name'
              />
            </label>
            <label className='mb-4 '>
            <span className='mr-2'>City:<span className='text-red-700'>*</span></span>
              <input
                type='text'
                name='city'
                className='border'
                required
                placeholder='Enter your city'
              />
            </label>
            <button
              type='submit'
              className='bg-black text-white px-4 mb-4 hover:bg-white hover:text-black rounded-sm font-semibold'
            >
              Submit
            </button>
          </form>
          <p className=' mb-4 '><b>What: </b>ParkingNSites is conducting a POC to gather insights on the challenges and successes users face when finding accessible parking. Your feedback
          will help shape better solutions for everyone.</p>
          <p className='mb-2'><b>To Qualify, Who Should Join:</b></p>
          <ul className='list-disc pl-5'>
  <li className='mb-1'>Individuals with mobility challenges</li>
  <li className='mb-1'>Caregivers</li>
  <li className='mb-1'>Advocates for accessibility</li>
  <li className='mb-1'>Advocates for accessibility</li>
  <li className='mb-1'>Anyone with an Android mobile phone - iOS in future</li>
</ul>
<p className='mb-2'>Of particular interest are people residing in Atlanta, Houston, San Diego, New York, Austin, Birmingham, Chattanooga and Washington D.C.</p>
<p className='mb-2'><b>Why Join:</b></p>
<ul className='list-disc pl-2'>
  <li className='mb-1'><b>Voice Your Experiences:</b>Share your story to improve accessible parking solutions.</li>
  <li className='mb-1'><b>Impact Future Designs:</b>Help create more user-friendly and inclusive parking options and services.</li>
  <li className='mb-1'><b>Be Part of Change:</b>Contribute to a project focused on real-world accessibility improvements.</li>
</ul>

<p className='mt-8'>Don't miss out. We need your input.</p>

<p className='mb-6 font-extrabold text-3xl'><b>------</b></p>

<p className='mb-12'><b>Brought to you by ParkingNSites</b></p>

        </div>
      )}
    </div>
  );
}
