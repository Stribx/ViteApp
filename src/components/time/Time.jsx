import React, { useState, useEffect, useMemo } from 'react';
import './Time.css'

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = useMemo(() => time.toLocaleTimeString(), [time]);
  const day = useMemo(() => time.toLocaleDateString('en-US',{ weekday: 'short' }), [time]);

  return (
    <div className='Time'>
      <div className='day'>
        <h1>{day}</h1>
        <p>day</p>
      </div>
      <h1>|</h1>
      <div className='clock'>
        <h1>{formattedTime}</h1>
        <p>time</p>
      </div>
    </div>
  );
}

export default Clock;