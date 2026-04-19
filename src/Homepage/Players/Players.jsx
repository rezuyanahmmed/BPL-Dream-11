import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';
const Players = ({ playersPromise, setCoin, coin }) => {
  console.log(playersPromise);
  const players = use(playersPromise);
  // console.log(players);


  const [selectedType, setSelectedType] = useState('available');
  console.log(selectedType, 'selectedType');

  const [selectedPlayers, setSelectedPlayers] = useState([]);



  return (
    <div className='w-11/12 max-w-[80%] mx-auto'>
      <div className='flex  justify-between mt-5 mb-5'>
        {selectedType === "available" ? <h2 className='font-bold text-2xl'>Available Players</h2> : <h2 className='font-bold text-2xl'>Selected Player ({selectedPlayers.length}/{players.length})</h2>}

        <div className='join '>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} `}>Available</button>

          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} `}>Selected ({selectedPlayers.length})</button>
        </div>

      </div>

      {selectedType === "available" ? <AvailablePlayers players={players}
        setCoin={setCoin}
        coin={coin}
        setSelectedPlayers={setSelectedPlayers}
        selectedPlayers={selectedPlayers}
      ></AvailablePlayers> : 
      <SelectedPlayers selectedPlayers={selectedPlayers}>
      </SelectedPlayers>}
    </div>
  );
};

export default Players;