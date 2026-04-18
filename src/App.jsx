import { Suspense, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import Banner from './Homepage/Banner/Banner'
import Players from './Homepage/Players/Players'

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  const playersPromise = fetchPlayer()
  const [coin, setCoin] = useState(500000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin} />
      </Suspense>

    </>
  )
}

export default App
