"use client"
import 'regenerator-runtime/runtime'; // Import regenerator-runtime  

import React from 'react';
import Navbar from '../(Molecules)/navbar'; // Adjust the path as needed
 import Microphone from "../(Atoms)/microphone" // Adjust the path as needed
// import '../styles/globals.css'; // Your global styles 
 
// import {Raisecomplaint} from '../(Molecules)/raisecomplaint';

type Props = {};

export  default function ChatBot({ }: Props) {
    return (
        <div className=' relative flex items-center justify-center min-h-screen bg-gray-600'>
            <div className='relative  w-[26rem] h-[38.25rem] bg-[#FFFF] p-6 rounded-3xl shadow-lg flex flex-col justify-between'>
                {/* Chat content goes here */}
                <div className="flex justify-center mt-[-2rem]">
                   
                   <Microphone/>
                </div>
                <Navbar></Navbar>   
             

            </div>
            {/* <Raisecomplaint/> */}
        </div>
    );
}

