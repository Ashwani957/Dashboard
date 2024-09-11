import React, { useState } from 'react';
import { Button } from '../ui/button';
import  ComboboxDemo  from '../(Atoms)/combobox';
import TabDemo from '../(Atoms)/tabsdemo';
import Navbar from './navbar';


type Props = {};

export function QuickActions({ }: Props) {
 
    return (
        <div className='relative w-[26rem] h-[38.25rem] bg-white p-6 rounded-3xl shadow-lg flex flex-col justify-between'>
          <div className='text-lg font-bold text-center text-black'>
           Quick Actions
          </div>
          <section className='flex justify-center justify-items-start'>
            <ComboboxDemo/>
          </section>
          <div className='flex justify-center items-center '>
          <TabDemo />
          </div>
          <div className='w-[23rem] h-20 bg-rose-900 rounded-md flex justify-center items-center'>
            <p className='text-white font-semibold p-2'>FeedBack</p>
            <p className='text-rose-200 font-semibold p-2 flex justify-center text-xs mb-2 items-center'>Give us feedback. Your valuable Feedback. Help us to continuously Improve our system. </p>
          </div>
          <div className='mb-8'>
            <Navbar/>
          </div>
         

        </div>
      );
    }
   