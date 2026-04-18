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
  const data = await res.json(); // এই লাইনটি যোগ করতে হবে
  return data; // 'res' এর বদলে 'data' রিটার্ন করুন
}

function App() {
  const playersPromise = fetchPlayer()

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>

    </>
  )
}

export default App
