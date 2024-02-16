import { useState, useEffect } from 'react';

const TimeDisplay = ({ initialTime }) => {
  const [time, setTime] = useState(new Date(initialTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-display">
      <p className="time">{time.toLocaleTimeString()}</p>
      <style jsx>{`
        .time-display {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 5rem; /* Adjust font size as needed */
          font-weight: bold;
          color: white;
          margin-top: 0px; /* Adjust margin-top as needed */
        }
        .time {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default TimeDisplay;
