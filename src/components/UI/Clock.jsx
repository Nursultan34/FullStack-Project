import React, { useEffect, useState } from 'react';

function Clock() {
  const [Days, setDays] = useState();
  const [Hours, setHours] = useState();
  const [Minutes, setMinutes] = useState();
  const [Seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date('oct 30,2022').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      const hours = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      
      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    })
  }
  useEffect(() => {
  countDown()
  },[])
  return  <div className="clock_wrapper d-flex align-items-center gap-5">
      <div className="clock_data d-flex align-items-center gap-5">
        <div className="text-center">
          <h1 className="text-white fs-3">{}</h1>
          <h5 className="text-white fs-5">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-5">
        <div className="text-center">
          <h1 className="text-white fs-3">{}</h1>
          <h5 className="text-white fs-5">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-5">
        <div className="text-center">
          <h1 className="text-white fs-3">{}</h1>
          <h5 className="text-white fs-5">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-5">
        <div className="text-center">
          <h1 className="text-white fs-3">{}</h1>
          <h5 className="text-white fs-5">Seconds</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
    </div>
  
}

export default Clock;
