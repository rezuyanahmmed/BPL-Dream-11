import React, { useState } from 'react';
import { FaUser, FaFlag } from "react-icons/fa";

const Card = ({ player }) => {

  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="card bg-base-100 shadow-sm border-gray-300">
      <figure>
        <img className='rounded-[10px]'
          src={player.playerImg}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><FaUser />
          {player.playerName}</h2>

        <div className='flex justify-between gap-2'>
          <div className='flex gap-2 items-center'>
            <FaFlag />
            <p>{player.playerCountry}</p>
          </div>

          <button className='btn'>{player.playerType}</button>
        </div>
        <div className="divider"></div>
        <h2 className='font-bold'>Rating ({player.rating})</h2>
        <div className='flex justify-between items-center mt-3'>
          <p className='font-bold'>{player.battingStyle}</p>
          <p className='text-right'>{player.bowlingStyle}</p>
        </div>
        <div className='flex justify-between items-center pt-5'>
          <p className='font-bold'>Price: {player.price}</p>
          <button className='btn' onClick={() => setIsSelected(true)}>{isSelected === true ? "selected" : "Choose Player"}</button>
        </div>


      </div>
    </div>
  );
};

export default Card;