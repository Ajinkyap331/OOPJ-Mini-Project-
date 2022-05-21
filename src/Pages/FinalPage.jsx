import React, { useState } from 'react'
import Data from '../Modules/Data'
export const FinalPage = () => {

  const [Loading, setLoading] = useState(true)

  return (
    <div className='finalpage'>
      <p>I am thinking of ... </p>
      {
        Loading && <p>Loading...</p>
      }
      <img onLoad={() => setLoading(false)} width="500px" src={Data.Image[Data.Final[0]]}></img>
      <p>{Data.Name[Data.Final[0]]}</p>
    </div>

  )
}
