
import React from 'react';
import { Mic } from 'lucide-react';

type Props = {};

export function Microphone({}: Props) {
  return (
    <div className="relative w-full h-full flex justify-center items-center"> {/* Wrapper to handle absolute positioning */}
      <div className="absolute bottom-[-20px] flex justify-center mb-[-29.5rem]">
        {/* Drop effect for microphone button */}
        <button className="flex items-center justify-center p-4 bg-[#75002B] rounded-full shadow-2xl text-[#FFFF] z-10">
          <Mic className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

