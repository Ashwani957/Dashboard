import React, { useState } from 'react';
import { Button } from '../ui/button';
import { transferableAbortController } from 'util';


type Props = {};

export function QuickActions({ }: Props) {
 
    return (
        <div className='relative w-[26rem] h-[38.25rem] bg-white p-6 rounded-3xl shadow-lg flex flex-col justify-between'>
          <div className='text-lg font-bold text-center text-black'>
           Quick Actions
          </div>
    
          {/* Description Section */}
          <div className="space-y-1">
            <p className="text-black font-bold">Description</p>
            <textarea className="w-full h-[14rem] p-2 border-2" placeholder="Enter your description here" />
          </div>
    
          {/* Footer buttons */}
          <div className="flex justify-end space-x-2">
            <Button className="text-rose-900 font-semibold h-8 px-4 bg-slate-400" variant="secondary">
              Cancel
            </Button>
            <Button className="text-rose-900 font-semibold h-8 px-4 bg-slate-400" variant="secondary">
              Submit
            </Button>
          </div>
        </div>
      );
    }
   