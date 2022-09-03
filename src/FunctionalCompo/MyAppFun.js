import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const FunctionalAPP = () => {
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const [intervalid, setIntervalId] = useState(0)
    const HandleButton = (e) => {
        e.preventDefault()
        if (intervalid) {
            clearInterval(intervalid)
            setIntervalId(0)
            return
        }

        const NewIntervalId = setInterval(() => {
            setCount(count => count + 1)

        }, 1000)
        setIntervalId(NewIntervalId)

    }

    return (
        <>
            <h1> App with Functional Component...</h1><br />

            <h2>Your Count : {count}</h2><br />
            <h2>See your Interval Id : {intervalid}</h2>
            Start Your Counter <button
                type="submit"
                onClick={HandleButton}
            >{intervalid ? "Stop" : "Start"}</button>
            <br />
            <br />
            <br />
            <button
                type="submit"
                onClick={() => navigate(-1)}
            >Go Back</button>
            <br />
            <button
                type="submit"
                onClick={() => navigate('/Class')}
            >Go Forward</button>
        </>
    )
}
export default FunctionalAPP;