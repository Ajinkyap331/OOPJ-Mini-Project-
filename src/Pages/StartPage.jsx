import React from 'react'
import Start from '../Images/start.jpg'

export const StartPage = ({ setpage }) => {
  return (
    <div className='startpage'>
      <img src={Start}></img>
      <p>Hi..I am Viru sahastrabudhi (Virus ) i can read your mind , think of any character, and I will guess ...!</p>
      <button onClick={() => setpage(2)} >START</button>
    </div>
  )
}
