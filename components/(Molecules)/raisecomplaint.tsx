
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

type Props = {};

export default function RaiseComplaint({ }: Props) {
    return (
        <div className='relative  w-[26rem] h-[38.25rem] bg-[#ffffff] p-6 rounded-3xl shadow-lg flex flex-col justify-between'>
            <div className='text-lg font-bold text-center text-black'>
                Raise a Complaint
            </div>

            {/* Mobile Number Section */}
            <div className="space-y-1">
                <p className="text-black font-bold">Mobile No.</p>
                <div className="flex items-center space-x-2">
                    <Input type="tel" placeholder="Enter Number" className="w-40 h-8" />
                    <Button className="text-rose-900 font-semibold h-8 px-2 bg-slate-400" variant="secondary">
                        Get OTP
                    </Button>
                </div>
            </div>

            {/* OTP Section */}
            <div className="space-y-1">
                <p className="text-black font-bold">Enter OTP</p>
                <div className="flex items-center space-x-2">
                    <Input type="text" placeholder="******" className="w-24 h-8" />
                    <Button className="text-rose-900 font-semibold h-8 px-2 bg-slate-400" variant="secondary">
                        Submit
                    </Button>
                    <Button className="text-rose-900 font-semibold h-8 px-2 bg-slate-400" variant="secondary">
                        Resend
                    </Button>
                </div>
            </div>

            {/* Journey Details & PNR Section */}
            <div className="flex space-x-4">
                <div className="space-y-1">
                    <p className="text-black font-bold">Journey Details</p>
                    <Input type="text" placeholder="Enter Details" className="w-40 h-8" />
                </div>
                <div className="space-y-1">
                    <p className="text-black font-bold">PNR No.</p>
                    <Input type="number" placeholder="Enter PNR" className="w-40 h-8" />
                </div>
            </div>

            {/* Complaint Type & Sub Type Section */}
            <div className="flex space-x-4">
                <div className="space-y-1">
                    <p className="text-black font-bold">Complaint Type</p>
                    <Input type="text" placeholder="Enter Type" className="w-40 h-8" />
                </div>
                <div className="space-y-1">
                    <p className="text-black font-bold">Sub Type</p>
                    <Input type="text" placeholder="Enter Sub Type" className="w-40 h-8" />
                </div>
            </div>

            {/* Incident Date Section */}
            <div className="space-y-1">
                <p className="text-black font-bold">Incident Date</p>
                <Input type="date" className="w-32 h-8" />
            </div>

            {/* Description Section */}
            <div className="space-y-1">
                <p className="text-black font-bold">Description</p>
                <textarea className="w-full h-16 p-2" placeholder="Enter your description here" />
            </div>

            {/* Buttons Section */}
            <div className='flex justify-end space-x-2'>
                <Button className="text-rose-900 font-semibold bg-slate-400 h-8 px-4 py-1" variant="secondary">
                    SUBMIT
                </Button>
                <Button className="text-rose-900 font-semibold bg-slate-400 h-8 px-4 py-1" variant="secondary">
                    RESET
                </Button>
            </div>
        </div>
    );
}

