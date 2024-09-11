"use client"
import 'regenerator-runtime/runtime'; // Import regenerator-runtime  

import React from 'react';
import {Background} from "@/components/(Atoms)/form"

import Navbar from '../(Molecules)/navbar'; // Adjust the path as needed
 import Microphone from "../(Atoms)/microphone" // Adjust the path as needed
// import '../styles/globals.css'; // Your global styles 
 
 import Raisecomplaint from '../(Molecules)/raisecomplaint';
import { Track } from '../(Molecules)/trackrequest';
import { Feedback } from '../(Molecules)/feedback';
import { QuickActions } from '../(Molecules)/quickactions';

type Props = {};

export  default function ChatBot({ }: Props) {
    return (
        <div className=' relative flex items-center justify-center min-h-screen bg-gray-900'>
            
            <div >
                <Background />
                {/* Chat content goes here */}
                <div className="flex justify-center mt-[-36rem]">
                    <Microphone />
                </div>
                <Navbar></Navbar>   
             

            </div>
            {/* <Raisecomplaint/>
            <Track/>
            <Feedback/> 
            */}
            <QuickActions/>
        </div>
        

    );
}

