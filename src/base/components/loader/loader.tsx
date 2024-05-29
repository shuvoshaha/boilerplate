import React from 'react';
import "./loader.scss"

type props = {
  height?: number,
  bg?: string,
  top?: number
}

const Loader: React.FC<props> = ({ height = 100, bg = "#f2f2f2", top = 50 }) => {

  return (
    <div className='loader' style={{ height: `${height}vh`, background: bg }}>
      <div className="loader__spin" style={{ top: `${top}%` }}></div>
    </div>
  )
}



export const Loading: React.FC= () => {

  return (
    <div className='loading'>
      <div className="loader__spin"></div>
    </div>
  )
}
export default Loader