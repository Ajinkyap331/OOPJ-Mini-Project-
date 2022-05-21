import React from 'react'
import Data from '../Modules/Data'
import Calculate from '../Config/Calculate'

export const Question = ({ index, asked, gNI, setpage }) => {

    const HandleQuestionDone = (index, YoN) => {
        var fin = Calculate.IQ(index, YoN)
        console.log(fin)
        if (fin != -1) {
            Data.Final[0] = fin;
            setpage(3)
        }
    }

    return (
        <div className='questions'>
            <p>{Data.start[Data.Starting[index]]} Your Character {Data.Q[index]} ?</p>
            <div className='questions-btn' onClick={() => { asked[index] = 1; gNI() }}>
                <button className='yes-btn' onClick={() => HandleQuestionDone(index, 1)}>YES</button>
                <button className='prob-btn'>PROBABLY</button>
                <button className='no-btn' onClick={() => HandleQuestionDone(index, 0)}>NO</button>
                <button className='dn-btn'>DON'T KNOW</button>
            </div>
        </div>

    )
}