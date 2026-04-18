import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
const Players = ({ playersPromise }) => {
  console.log(playersPromise);
  const players = use(playersPromise);
  // console.log(players);


  const [selectedType, setSelectedType] = useState('available');
  console.log(selectedType, 'selectedType');



  return (
    <div className='w-11/12 max-w-[80%] mx-auto'>
      <div className='flex  justify-between mt-5 mb-5'>
        <h2 className='font-bold text-2xl'>Available Players</h2>

        <div className='join '>

          <button className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-red-500"} `}>Available</button>

          <button className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-red-500"} `}>Selected</button>

        </div>
      </div>

      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;