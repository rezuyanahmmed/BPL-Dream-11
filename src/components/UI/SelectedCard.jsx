import React from 'react';
import { MdDelete } from "react-icons/md";


const SelectedCard = ({ player, handleDeleteSelectedPlayer }) => {
  return (

    <div className='flex items-center gap-6 justify-between p-4 rounded-2xl border'>
      <div className='flex items-center gap-6'>
        <img src={player.playerImg} alt={player.playerName}
          className='h-[75px] w-auto rounded-md' />
        <div>
          <h2 className='flex items-center font-bold text-xl'>
            {player.playerName}</h2>
          <p className='font-semibold'>{player.playerType}</p>
        </div>
      </div>
      <button className='btn text-red-500'
        onClick={() => handleDeleteSelectedPlayer(player)}><MdDelete /></button>

    </div>

  );
};

export default SelectedCard;