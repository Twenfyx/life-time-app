import { useState, useEffect } from "react";

interface CountProps {
  selectedDate: string;
}

function Countdown({ selectedDate }: CountProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const today = new Date();
    const targetDate = new Date(selectedDate);
    const diff = today.getTime() - targetDate.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }; 

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)), 
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24), 
      minutes: Math.floor((diff / (1000 * 60)) % 60), 
      seconds: Math.floor((diff / 1000) % 60), 
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); 

    return () => clearInterval(timer); 
  }, [selectedDate]);

  return (
    <>
      <h1>Countdown to {selectedDate}:</h1>
      <h2>
      You lived: {timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Minutes, {timeLeft.seconds} Seconds
      </h2>
    </>
  );
}

export default Countdown;
