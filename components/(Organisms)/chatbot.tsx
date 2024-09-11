"use client"
import 'regenerator-runtime/runtime'; // Import regenerator-runtime  

import React from 'react';
import {Form} from "@/components/(Atoms)/form"

import Navbar from '../(Molecules)/navbar'; // Adjust the path as needed
 import Microphone from "../(Atoms)/microphone" // Adjust the path as needed
// import '../styles/globals.css'; // Your global styles 
 
// import {Raisecomplaint} from '../(Molecules)/raisecomplaint';

type Props = {};

export  default function ChatBot({ }: Props) {
    return (
        <div className=' relative flex items-center justify-center min-h-screen bg-gray-900'>
            
            <div >
                <Form />
                {/* Chat content goes here */}
<<<<<<< HEAD
                <div className="flex justify-center mt-[-36rem]">
                    <Microphone />
=======
                <div className="flex justify-center mt-[-2rem]">
                   
                   <Microphone/>
>>>>>>> d19a827a5007460a0579511312bbe8203e49ea9d
                </div>
                <Navbar></Navbar>   
             

            </div>
            {/* <Raisecomplaint/> */}
        </div>
        

    );
}

