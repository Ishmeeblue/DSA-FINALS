import React from 'react';
import lips from '../assets/lips.jpg';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-pink-400 h-64 sm:h-80 lg:h-96'>
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141] text-center sm:text-left'>
          <div className='flex items-center gap-2 justify-center sm:justify-start'>
            <p className='font-medium text-sm md:text-base text-pink-400'>LOVE BLINE, LOVE YOU</p>
            <p className='w-8 md:w-11 h-[2px] bg-pink-500'></p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-black'>GLOW UP YOUR GAME</h1>
          <div className='flex items-center gap-2 justify-center sm:justify-start'>
            <p className='font-semibold text-sm md:text-base text-pink-400'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-pink-500'></p>
          </div>
        </div>
      </div>
      <img src={lips} className="w-full sm:w-1/2 h-full object-cover rounded-lg" alt="Lips" />
    </div>
  );
}

export default Hero;