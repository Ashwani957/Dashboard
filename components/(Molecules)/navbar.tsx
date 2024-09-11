import React from "react";
import { Paperclip, NotebookPen, Pointer, Settings } from 'lucide-react';
 

type Props = {};

export default function Navbar({}: Props) {
  return (
    
    <div className=" relative flex justify-center mt-[29rem]">
       
      <div className=' relative   w-[24rem] h-[4rem] bg-[#75002B] p-4 rounded-3xl shadow-3xl flex items-center justify-between text-[#FFFF] text-xs'>
        <button className="flex flex-col items-center font-bold">
          <Paperclip className="mb-1 w-6 h-6" />
          Attachment
        </button>
        <button className="flex flex-col items-center font-bold">
          <NotebookPen className="mb-1 w-6 h-6" />
          Type
        </button>
        
        <button className="flex flex-col items-center font-bold">
          <Pointer className="mb-1 w-6 h-6" />
          Quick Actions
        </button>
        <button className="flex flex-col items-center font-bold">
          <Settings className="mb-1 w-6 h-6" />
          Settings
        </button>
      </div>
    </div>

  );
}
