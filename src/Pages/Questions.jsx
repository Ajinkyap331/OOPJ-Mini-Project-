import React, { useEffect, useState, useRef } from 'react'
import { Question } from '../Components/Question'
import Data from '../Modules/Data'

export const Questions = ({setpage}) => {

    const [index, setindex] = useState(0)

    const QuestionNumber = useRef()

    const giveNextIndex = () => {
        // console.log(Asked)
        var flag = 0;
        for (var i = 0; i < Data.Q.length; i++)
            if (Data.Asked[i] === 0) {
                flag = 1;
                break;
            }
        // console.log(flag)
        if (flag === 0) {
            setpage(3)  
            return;
        }
        var i_ = Math.floor(Math.random() * (Data.Q.length))
        while (Data.Asked[i_] !== 0) {
            // console.log("RUN")
            i_ = Math.floor(Math.random() * (Data.Q.length))
        }
        setindex(i_);
    }

    useEffect(() => {
        giveNextIndex()
    }, [])


    return (
        <div>
            <Question index={index} asked={Data.Asked} gNI={giveNextIndex} setpage = {setpage} QN = {QuestionNumber} />
        </div>
    )
}
