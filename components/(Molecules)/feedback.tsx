import React, { useState } from 'react';
import { Button } from '../ui/button';
import { FaStar } from 'react-icons/fa'; // Import Font Awesome star icon

type Props = {};

export function Feedback({ }: Props) {
  const [rating, setRating] = useState(0); // To manage the star rating
  const [hover, setHover] = useState(0); // To manage hover effect

  return (
    <div className='relative w-[26rem] h-[38.25rem] bg-white p-6 rounded-3xl shadow-lg flex flex-col justify-between'>
      <div className='text-lg font-bold text-center text-black'>
        Feedback
      </div>

      {/* Star Rating Section */}
      <div className="space-y-1 mt-[-3.5rem]">
        <p className="text-black font-bold">Rating</p>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={36} // Increased the size from 24 to 32
              className={`cursor-pointer ${
                (hover || rating) >= star ? 'text-yellow-500' : 'text-gray-300'
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>
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
