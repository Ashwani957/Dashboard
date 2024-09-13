import React from 'react';  
import Image from 'next/image';  
import { Button } from "@/components/ui/button"; // Ensure you have this Button component set up properly  
import logog20 from '../assests/logog20.png'
import google_mic from '../assests/google_mic.png'
import { MdOutlinePhoneInTalk } from "react-icons/md";
function Railmadaheader() {  
  return (  
    // Top of the page  
    <header className='w-full flex items-center p-4  text-black  '>  
      <div className='container mx-auto flex justify-between items-center'>  
        {/* Logo and tagline */}  
        <div className='flex items-center '>  

          <a title="RailMada, A Grievance Redressal Management" className="flex">  
            <Image src={logog20} alt="RailMada" width={100} height={100} className='pl-2 pr-4' />
            <div className='ml-4'>
            <h1 className='text-[#75002B] font-bold font-poppins text-3xl'>RailMadad</h1>  
            <p className='text-sm'>For Inquiry, Assistance & Grievance Redressal</p>  
            </div>  

          </a>  
        </div>  

        {/* Medical assistance details */}  
        <div className='flex items-center space-x-4'>  
          <a href="tel:139" className='flex items-center text-sm'> 
          <Button variant="outline" className="font-[33px] font-poppins text-[#75002B] border-[#75002B] border-[2px] rounded-[5px]   py-[15px]  bg-[#930b3e]">
            
      <span  
       className="text-white bg-[#930b3e] text-[33px] font-semibold rounded-[5px] px-[15px] animate-color_change"     
      
      >
        <MdOutlinePhoneInTalk  /></span> {/* Place appropriate call icon */}  
            139</Button>  

      <div className="">
      <p className="text-[18px]  font-popins ">For security/medical assistance</p>  

      </div>
            
          </a>  
        </div>  

        {/* Login and signup buttons */}  
        <ul className='flex space-x-2'>  
          <li>  
            <Button variant="outline" className='hover:bg-[#75002B] hover:text-white'>Login</Button>  
          </li>  
          <li>  
            <Button variant="outline"  className='hover:bg-[#75002B] hover:text-white'>Sign Up</Button>  
          </li>  
          <li>  
            <Button variant="outline"  >
             
  <select className="text-">
  <option value="English">English</option>
  <option value="Hindi">Hindi</option>
  <option value="Punjabi">Punjabi</option>
  <option value="audi">Audi</option>
</select>
              
              </Button>  
          </li>  
          <li>  
            <div>  
              <span className="material-icons">
              <Image src={google_mic} alt="RailMada" width={60} height={100} className='pl-2 pr-4' />
                </span> {/* Place appropriate microphone icon */}  
            </div>  
          </li>  
        </ul>  
      </div>  
    </header>  
  );  
}  

export default Railmadaheader;  