import React from 'react';
import { FaUser, FaFlag } from "react-icons/fa";
// import { FaFlag } from "react-icons/fa";



const AvailablePlayers = ({ players }) => {
  console.log(players, 'players');

  return (
    <div>

      {/* {players.map((player) => {
        return <h2>hi</h2>;
      })} */}

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

      <button className='btn'>All-Rounder</button>
    </div>
    <div className="divider"></div>
    <h2 className='font-bold'>Rating</h2>
    <div className='flex gap-31'>
      <p className='font-bold'>Right-Hand-Bat</p>
      <p>Right-Hand-Bowl</p>
    </div>
    <div className='flex pt-5'>
      <p className='font-bold'>Price: $1500000</p>
      <button className='btn'>Choose Player</button>
    </div>


  </div>
</div>
    </div >
  );
};

export default AvailablePlayers;