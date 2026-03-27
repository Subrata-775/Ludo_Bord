import React, { useState } from 'react'

function LudoBord() {
  const [move, setMove] = useState({
    red: 0,
    blue: 0,
    yellow: 0,
    green: 0
  });
  const updateMoveBlue = () => {
    setMove(prevMove => ({
      ...prevMove,
      blue: prevMove.blue + 1
    }));
  };
  const updateMoveRed = () => {
    setMove(prevMove => ({
      ...prevMove,
      red: prevMove.red + 1
    }));
  };
  const updateMoveYellow = () => {
    setMove(prevMove => ({
      ...prevMove,
      yellow: prevMove.yellow + 1
    }));
  };
  const updateMoveGreen = () => {
    setMove(prevMove => ({
      ...prevMove,
      green: prevMove.green + 1
    }));
  };
  const updateMoveBlueD = () => {
    setMove(prevMove => ({
      ...prevMove,
      blue: prevMove.blue - 1
    }));
  };
  const updateMoveRedD = () => {
    setMove(prevMove => ({
      ...prevMove,
      red: prevMove.red - 1
    }));
  };
  const updateMoveYellowD = () => {
    setMove(prevMove => ({
      ...prevMove,
      yellow: prevMove.yellow - 1
    }));
  };
  const updateMoveGreenD = () => {
    setMove(prevMove => ({
      ...prevMove,
      green: prevMove.green - 1
    }));
  };
  return (
    <div className='flex  flex-col justify-center items-center gap-10'>
      <h1 className='underline font-bold'>
        Ludo Bord Game
      </h1>
      <div className='w-[200px] '>
        <p className='font-bold text-2xl  text-white '>Blue= {move.blue}</p>
        <div className=' flex justify-between mt-5'>
          <button onClick={updateMoveBlue} className='font-bold text-2xl transition-all duration-200 bg-blue-500 border-2 rounded hover:scale-105 p-3 text-white'>+1</button>
          <button onClick={updateMoveBlueD} className='font-bold text-2xl transition-all duration-200 bg-blue-500 border-2 rounded hover:scale-105 p-3 text-white'>-1</button>
        </div>

        <p className='font-bold text-2xl text-white mt-5 '>Yellow= {move.yellow}</p>
        <div className=' flex justify-between mt-5 '>

          <button onClick={updateMoveYellow} className='font-bold text-2xl transition-all duration-200 bg-yellow-500 border-2 rounded hover:scale-105 p-3 text-white'>+1</button>
          <button onClick={updateMoveYellowD} className='font-bold text-2xl transition-all duration-200 bg-yellow-500 border-2 rounded hover:scale-105 p-3 text-white'>-1</button>
        </div>
        <p className='font-bold text-2xl  text-white mt-5'>Green= {move.green}</p>
        <div className=' flex justify-between mt-5'>

          <button onClick={updateMoveGreen} className='font-bold text-2xl transition-all duration-200 bg-green-500 border-2 rounded hover:scale-105 p-3 text-white'>+1</button>
          <button onClick={updateMoveGreenD} className='font-bold text-2xl transition-all duration-200 bg-green-500 border-2 rounded hover:scale-105 p-3 text-white'>-1</button>
        </div>
        <p className='font-bold text-2xl  text-white mt-5'>Red= {move.red}</p>
        <div className=' flex justify-between mt-5'>

          <button onClick={updateMoveRed} className='font-bold text-2xl transition-all duration-200 bg-red-500 border-2 rounded hover:scale-105 p-3 text-white'>+1</button>
          <button onClick={updateMoveRedD} className='font-bold text-2xl transition-all duration-200 bg-red-500 border-2 rounded hover:scale-105 p-3 text-white'>-1</button>
        </div>
      </div>
    </div>
  )
}

export default LudoBord