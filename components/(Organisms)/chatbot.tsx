
import React from 'react';
import {Form} from "@/components/(Atoms)/form"

import Navbar from '../(Molecules)/navbar'; // Adjust the path as needed
import { Microphone } from '../(Atoms)/microphone'; // Adjust the path as needed
import Raisecomplaint from '../(Molecules)/raisecomplaint';

type Props = {};

export function ChatBot({ }: Props) {
    return (
        <div className=' relative flex items-center justify-center min-h-screen bg-gray-900'>
            
            <div >
                <Form />
                {/* Chat content goes here */}
                <div className="flex justify-center mt-[-36rem]">
                    <Microphone />
                </div>
                {/* Navbar */}
                <Navbar />

            </div>
            <Raisecomplaint/>
        </div>
        

    );
}

