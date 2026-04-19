import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
// import { FaRegUser } from "react-icons/fa";



const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin, coin }) => {
  console.log(selectedPlayers);

  const handleDeleteSelectedPlayer = (player) => {
    console.log(selectedPlayers, 'selectedPlayers');

    const filterdPlayers = selectedPlayers.filter(selectedplayer => selectedplayer.playerName != player.playerName);
    console.log(filterdPlayers, 'filterdplayers');

    setSelectedPlayers(filterdPlayers);
    setCoin(coin + player.price);

  }

  return (
    <div>
      <div className='space-y-4 mb-2'>
        {selectedPlayers.length === 0 ?
          <div className='h-[400px] flex items-center justify-center flex-col gap-2 bg-gray-100 rounded-2xl'>
            <h2 className='font-semibold text-xl'>No players selectet yet</h2>
            <p className='text-gray-600'>Go to  Available tab to select players</p>
          </div>
          : selectedPlayers.map((player, ind) => {
            return (
              <div key={ind} className='flex items-center gap-6 justify-between p-4 rounded-2xl border'>
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
          })}
      </div>
    </div>

  );
};

export default SelectedPlayers;