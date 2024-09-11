 "use client  "
import React from 'react';
import { Mic } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import {useEffect} from 'react'


type Props = {};

  export default function Microphone({}: Props) {


  // state variables 

  
  const{
    transcript,
     listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  }=useSpeechRecognition()

   
   
  if(!browserSupportsSpeechRecognition){
    return <span>Browser  does not support  speech recognition.</span>
  }


  return (

    <div>

   
    <div className="relative w-full h-full flex justify-center items-center"> {/* Wrapper to handle absolute positioning */}
      <div className="absolute bottom-[12px] flex justify-center mb-[-29.5rem]">
         
        <button className="flex items-center justify-center p-4 bg-[#75002B] rounded-full shadow-2xl text-[#FFFF] z-10  hover:scale-110 transition-transform duration-200 ease-in-out   hover:bg-[#75002B] hover:shadow-lg"
        onClick={SpeechRecognition.startListening}>
          
          { 'on'?<Mic className="w-8 h-8 " />:'off'}
          
        </button> 
      </div>
    </div>

    <div>
      <p>Microphone:{listening?'on':'off'}</p>

{/* remove comment code  */}
      {/* <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}

      <p>{transcript}</p>
       
    </div>
    </div>

  );
}
 