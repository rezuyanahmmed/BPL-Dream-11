import React from 'react';
import { FaUser, FaFlag } from "react-icons/fa";
// import { FaFlag } from "react-icons/fa";



const AvailablePlayers = ({ players }) => {
  console.log(players, 'players');

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"><FaUser />
            Card Title</h2>

          <div className='flex justify-between gap-2'>
            <div className='flex gap-2 items-center'>
              <FaFlag />
              <p>Bangladesh</p>
            </div>
            <button className='btn btn-ghost'>All-Rounder</button>
          </div>

          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;