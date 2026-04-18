import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
const Players = ({ playersPromise }) => {
  console.log(playersPromise);
  const players = use(playersPromise);
  // console.log(players);


  return (
    <div className='w-11/12 max-w-[80%] mx-auto'>
      players : {players.length}
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;