import React, { useState } from 'react';
import SelectedCard from '../../../components/UI/SelectedCard';
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
              <SelectedCard key={ind} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelectedCard>
            );
          })}
      </div>
    </div>

  );
};

export default SelectedPlayers;