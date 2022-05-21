import React from 'react'
import Start from '../Images/start.jpg'

export const StartPage = ({ setpage }) => {
  return (
    <div className='startpage'>
      <img src={Start}></img>
      <p>Hi..I am Viru Sahastra Budhe (Virus ) I can read your mind , think of any Character, and I will try to guess it  !</p>
      <button onClick={() => setpage(2)} >START</button>

    </div>
  )
}
