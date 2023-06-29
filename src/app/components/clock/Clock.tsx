"use client";
import React, { useEffect, useState } from 'react';
import styles from './Clock.module.css';
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';

function Clock() {
  const [time, setTime] = useState(new Date());
  const SUNRISE_HOUR = 7;
  const SUNSET_HOUR = 18;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpar o timer antes da desmontagem do componente
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const getClockIcon = (hours: number) => {
    if (time instanceof Date && (hours < SUNRISE_HOUR || hours >= SUNSET_HOUR)) {
      return <BsMoonFill size={28} />;
    } else {
      return <BsFillSunFill size={28} />;
    }
  };
  const clockIcon = getClockIcon(time.getHours());

  return (
    <div className={styles.container}>
      <h1 className={styles.clock}>
        {clockIcon}
        {formatTime(time)}
      </h1>
    </div>
  );
}

export default Clock;
