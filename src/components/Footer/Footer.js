import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <div className='w-full bottom-0 font-[jost]'>
      <div className='flex gap-[292px] items-center w-full h-[91px] bg-footer1'>
        <div className='flex items-center outline-[black] text-[white]  text-[32px] ml-[44px]'><span className='[text-shadow:_0.5px_-0.5px_0.5px_black,_-0.5px_0.5px_0.5px_black]'>Follow us Socially</span></div>
        <div className='flex gap-[53px] items-center font-bold text-[white]'>
          <div className='flex gap-[8px] items-center'><Image src="/facebook.svg" width={23} height={37} /><span className='text-20 [text-shadow:_0.5px_-0.5px_0.5px_black,_-0.5px_0.5px_0.5px_black]'>Facebook</span></div>
          <div className='flex gap-[8px]'><Image src="/instagram.svg" width={29} height={28} /><span className='text-20 [text-shadow:_0.5px_-0.5px_0.5px_black,_-0.5px_0.5px_0.5px_black]'>Instagram</span></div>
          <div className='flex gap-[8px]'><Image src="/twitter.svg" width={32} height={26} /><span className='text [text-shadow:_0.5px_-0.5px_0.5px_black,_-0.5px_0.5px_0.5px_black]'>Twitter</span></div>
        </div>
      </div>

      <div className='flex flex-col justify-center w-full h-[260px] bg-footer2 font-bold'>
        
          <div className='flex justify-center'><Image src="/StyleMax1.png" width="420" height="281" /></div>
          <div className='flex w-full gap-[10px] text-[18px] justify-center absolute mt-[50px]'>
            <p className='text-[white] border-r-2 pr-[10px]'>HOME</p>
            <p className='text-[white] border-r-2 pr-[10px]'>ABOUT US</p>
            <p className='text-[white] border-r-2 pr-[10px]'>SHOP BY BRAND</p>
            <p className='text-[white] border-r-2 pr-[10px]'>MEN</p>
            <p className='text-[white] border-r-2 pr-[10px]'>WOMEN</p>
            <p className='text-[white] border-r-2 pr-[10px]'>CONTACT US</p>
            <p className='text-[white] pr-[10px]'>SELL WITH US</p>
          </div>
          <div className='flex text-[14px] w-full gap-[8px] justify-center absolute mb-[-190px] '>
            <p className='text-[white] border-r-2 pr-[8px]'>Shipping and Delivery</p>
            <p className='text-[white] border-r-2 pr-[8px]'>Return Policy</p>
            <p className='text-[white] border-r-2 pr-[8px]'>Privacy Policy</p>
            <p className='text-[white] border-r-2 pr-[8px]'>Terms and Conditions</p>
            <p className='text-[white]  pr-[8px]'>FAQs</p>
          </div>
        </div>
      
          

    
    </div>
  )
}

export default Footer