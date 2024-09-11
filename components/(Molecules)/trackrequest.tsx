import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { InputOTPControlled } from '../(Atoms)/inputotp';

type Props = {};

export function Track({ }: Props) {
  return (
    <div className='relative w-[26rem] h-[38.25rem] bg-white p-6 rounded-3xl shadow-lg flex flex-col justify-between'>
      <div className='text-lg font-bold text-center text-black'>
        Track Request
      </div>

      {/* Complaint ID Section */}
      <div className="space-y-3 mt-[-5.25rem]">
        <p className="text-black font-bold">Complaint ID</p>
        <div className="flex items-center space-x-2">
        <Input type="text" placeholder="Enter Complaint ID" className="w-40 h-8" />
          <Button className="text-rose-900 font-semibold h-8 px-2 bg-slate-400" variant="secondary">
            SUBMIT
          </Button>
        </div>
      </div>

      {/* OTP Section */}
      <div className="space-y-3 mt-[-6.25rem]">
        <p className="text-black font-bold">Validate OTP</p>
        <div className="flex items-center space-x-2">
        {/* <Input type="text" placeholder="******" className="w-40 h-8 text-black" /> */}
        <InputOTPControlled/>
          <Button className="text-rose-900 font-semibold h-8 px-2 bg-slate-400" variant="secondary">
            Submit
          </Button>
          <Button className="text-rose-900 font-semibold h-8 px-2 bg-slate-400" variant="secondary">
            Resend
          </Button>
        </div>
      </div>
     {/* History of Complaints */}
     <div className="space-y-3 mt-[-6.25rem]">
        <p className="text-black font-bold">History of Complaints</p>
        <div className="space-y-1 text-sm">
          <p className="text-black">Complaint 1 -   <span className="text-green-600 font-semibold">  Completed</span></p>
          <p className="text-black">Complaint 2 -   <span className="text-green-600 font-semibold">  Completed</span></p>
          <p className="text-black">Complaint 3 -   <span className="text-green-600 font-semibold">  Completed</span></p>
          <p className="text-black">Complaint 4 -   <span className="text-green-600 font-semibold">  Completed</span></p>
          <p className="text-black">Complaint 5 -   <span className="text-orange-500 font-semibold"> Pending</span></p>
          <p className="text-black">Complaint 6 -   <span className="text-orange-500 font-semibold"> Pending</span></p>
        </div>
      </div>

      {/* Footer buttons */}
      <div className="flex justify-end space-x-2">
        <Button className="text-rose-900 font-semibold h-8 px-4 bg-slate-400" variant="secondary">
          Cancel
        </Button>
        <Button className="text-rose-900 font-semibold h-8 px-4 bg-slate-400" variant="secondary">
          Track
        </Button>
      </div>
    </div>
  );
}
