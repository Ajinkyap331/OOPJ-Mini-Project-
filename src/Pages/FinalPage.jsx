import React, { useState } from 'react'
import Data from '../Modules/Data'
import { CleanUP } from '../Config/CleanUp'
export const FinalPage = ({setpage}) => {

  const [Loading, setLoading] = useState(true)


  return (
    <div className='finalpage'>
      <p>I am thinking of ... </p>
      {
        Loading && <p>Loading...</p>
      }
      <img onLoad={() => setLoading(false)} width="500px" src={Data.Name[Data.Final[0]]["imageurl"]}></img>
      <p>{Data.Name[Data.Final[0]]["name"]}</p>
      <button onClick={() => {setpage(2); CleanUP()} }>Guess Another Character</button>
      <button onClick={() => {setpage(1); CleanUP()} }>Home</button>
    </div>
  )
} 