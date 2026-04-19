import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";



const SelectedPlayers = ({ selectedPlayers }) => {
  console.log(selectedPlayers);
  return (
    <div>
      {
        selectedPlayers.map((player, ind) => {
          return (
            <div key={ind} className='flex items-center gap-6 justify-between p-4 rounded-2xl border'>
              <div className='flex items-center gap-6'>
                <img src={player.playerImg} alt={player.playerName} 
                className='h-[100px] w-auto rounded-md' />
                <div>
                  <h2 className='flex items-center gap-4 font-bold text-2xl'><FaRegUser />
                    {player.playerName}</h2>
                  <p>{player.playerType}</p>
                </div>
              </div>
              <button><MdDelete /></button>

            </div>
          );
        })}
    </div>

  );
};

export default SelectedPlayers;