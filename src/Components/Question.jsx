import React from 'react'
import Data from '../Modules/Data'
import Calculate from '../Config/Calculate'
import { CleanUP } from '../Config/CleanUp'

export const Question = ({ index, asked, gNI, setpage, QN }) => {

    const HandleQuestionDone = (index, YoN) => {
        var fin = Calculate.IQ(index, YoN)
        // console.log(fin) 
        if (fin != -1) {
            Data.Final[0] = fin;
            setpage(3)
        }
    }

    return (    
        <div className='questions'>
            <div style={{ display: "flex", gap: "5px" }}>
                <p>Question : </p>
                <p ref={QN}>1</p>
            </div>
            <p>{Data.start[Data.Q[index].start]} Your Character {Data.Q[index].quest} ?</p>
            <div className='questions-btn' onClick={() => { asked[index] = 1; gNI(); QN.current.innerHTML = parseInt(QN.current.innerHTML) + 1; console.log(asked) }}>
                <button className='yes-btn' onClick={() => HandleQuestionDone(index, 1)}>YES</button>
                <button className='prob-btn' onClick={() => HandleQuestionDone(index, 2)} > PROBABLY</button>
                <button className='no-btn' onClick={() => HandleQuestionDone(index, 0)}>NO</button>
                <button className='dn-btn'>DON'T KNOW</button>
            </div>
            <button onClick={() => {setpage(1); CleanUP()}}>LEAVE</button>
        </div >

    )
}
