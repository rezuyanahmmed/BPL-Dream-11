import React from 'react';
import { FaUser, FaFlag } from "react-icons/fa";
// import { FaFlag } from "react-icons/fa";



const AvailablePlayers = ({ players }) => {
  console.log(players, 'players');

  return (
    <div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6'>
        {players.map((player) => {
          return <div className="card bg-base-100 shadow-sm border-gray-300">
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
                <p>{player.bowlingStyle}</p>
              </div>
              <div className='flex justify-between items-center pt-5'>
                <p className='font-bold'>Price: {player.price}</p>
                <button className='btn'>Choose Player</button>
              </div>


            </div>
          </div>;
        })}
      </div>


    </div >
  );
};

export default AvailablePlayers;