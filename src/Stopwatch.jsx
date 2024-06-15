
import { useEffect, useRef, useState } from 'react';


function StopWatch() {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsTime, setElapsTime] = useState(0)
  const intervalRef = useRef(null)
  const startTime = useRef(0)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsTime(Date.now() - startTime.current)
      }, 10)
    }

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [isRunning])

  const start = () => {
    setIsRunning(true)
    startTime.current = Date.now() - elapsTime
    console.log(startTime.current);
  }
  
  const stop = () => {
    setIsRunning(false)
  }
  const reset = () => {
    setElapsTime(0)
    setIsRunning(false)
  }
  const formatTime = () => {
    let min = Math.floor(elapsTime / (1000 * 60) % 60)
    let sec = Math.floor(elapsTime / (1000) % 60)
    let millSec = Math.floor((elapsTime % 1000) / 10)

    min = String(min).padStart(2, "0")
    sec = String(sec).padStart(2, "0")
    millSec = String(millSec).padStart(2, "0")
    return `${min} : ${sec} : ${millSec}`
  }

  return (

    <div className='inner'>
      <div className='watch'>
        <div className='timer'>
          <h1>{formatTime()}</h1>
        </div>
        <div className='controls'>
          <button className='btn' onClick={start}>Start</button>
          <button className='btn' onClick={stop}>Stop</button>
          <button className='btn' onClick={reset}>Reset</button>
        </div>
      </div>
    </div>

  )
}

export default StopWatch;
