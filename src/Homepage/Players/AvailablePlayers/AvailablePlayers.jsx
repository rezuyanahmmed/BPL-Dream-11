import React from 'react';
import Card from '../../../components/UI/Card';

// import { FaFlag } from "react-icons/fa";



const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
  console.log(players, 'players');

  return (
    <div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6'>
        {players.map((player) => {
          return <Card player={player} setCoin={setCoin} coin={coin} 
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}></Card>

        })}
      </div>


    </div >
  );
};

export default AvailablePlayers;