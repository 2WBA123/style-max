import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import DeliveryIcon from './DeliveryIcon'
import Logo from './Logo'
import ProfileIcon from './ProfileIcon'

function Header() {
  return (
    <>
      <div className='flex bg-headergrey justify-center items-center w-full h-[28px] p-[10px] text-[white] text-[16px] font-[400]'><div className='pr-2'><DeliveryIcon /></div>Free shipping for orders over $50</div>
      <div className='flex py-4 w-full justify-between items-center h-[58px] min-h-[58px] px-3'>
        <div className='h-[27px] min-h-[27px] mt-[-100px] '>
          <Logo/>
        </div>
        
        <SearchBar />
        <ProfileIcon />
        <div>
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0252 3.0251C12.0251 3.02511 12.0251 3.02512 12.0251 3.02513L10.7072 4.34317C10.5197 4.53072 10.2653 4.63609 10.0001 4.63609C9.73485 4.6361 9.48049 4.53074 9.29295 4.3432L7.97487 3.02513C6.60804 1.65829 4.39196 1.65829 3.02513 3.02513C1.65829 4.39196 1.65829 6.60804 3.02513 7.97487L10 14.9498L16.9749 7.97488L17.682 8.68198L16.9749 7.97487C18.3417 6.60804 18.3417 4.39196 16.9749 3.02513C15.608 1.6583 13.392 1.65829 12.0252 3.0251ZM10.6109 1.61091C12.7588 -0.536971 16.2412 -0.536971 18.3891 1.61091C20.537 3.7588 20.537 7.2412 18.3891 9.38909L10.7072 17.0711C10.5196 17.2587 10.2653 17.364 10.0001 17.364C9.73484 17.364 9.48048 17.2587 9.29295 17.0711L1.61091 9.38909C-0.536971 7.2412 -0.536971 3.7588 1.61091 1.61091C3.7588 -0.536971 7.2412 -0.536971 9.38909 1.61091L10 2.22185L10.6109 1.61094L10.6109 1.61091Z" fill="#0F172A" />
          </svg>
        </div>
        <div>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5V6H16C16.5201 6 16.9534 6.39866 16.9965 6.91695L17.9965 18.917C18.0198 19.1956 17.9252 19.4713 17.7359 19.6771C17.5465 19.8829 17.2797 20 17 20H1C0.720351 20 0.453476 19.8829 0.264121 19.6771C0.0747659 19.4713 -0.0197664 19.1956 0.00345746 18.917L1.00346 6.91695C1.04665 6.39866 1.47991 6 2 6H4V5ZM4 8V9C4 9.55229 4.44772 10 5 10C5.55229 10 6 9.55229 6 9V8H12V9C12 9.55229 12.4477 10 13 10C13.5523 10 14 9.55229 14 9V8H15.0799L15.9132 18H2.0868L2.92014 8H4ZM12 6H6V5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5V6Z" fill="#0F172A" />
          </svg>
        </div>
      </div>
      <div className='flex w-full py-4 px-8 border-b-[1px] border-b-[#B1AFAF]'>
        <div className='flex w-1/2'>
          <div className='font-[16px] px-2'>
          NEW ARRIVALS
        </div>
        <div className='font-[16px] px-2'>
          WOMEN
        </div>
        <div className='font-[16px] px-2'>
          MEN
        </div>
        <div className='font-[16px] px-2'>
          KIDS
        </div>
        <div className='font-[16px] px-2'>
          BRAND
        </div>
        <div className='font-[16px] px-2'>
          RENT
        </div>
        <div className='font-[16px] px-2'>
          SALE
        </div>
        </div>
        
        <div className='flex pl-5 w-1/2 justify-end'>
        <div className='font-[16px] px-2'>
        HOW IT WORKS
        </div>
        <div className='font-[16px] px-2'>
        SELL WITH US
        </div>
        <div className='font-[16px] px-2'>
        BRIDAL COLLECTION
        </div>
      </div>
      </div>
    </>
  )
}

export default Header
