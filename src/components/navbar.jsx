import React from 'react';
import dollarImg from "../assets/dollar 1.png"

const Navbar = () => {
  return (
    <div className='bg-base-100 shadow-sm'>
      <div className="navbar w-11/12 max-w-[80%] mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="flex gap-2 justify-between items-center font-bold ">
            0 coin
            <img src={dollarImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;