import React, { useState, useEffect } from 'react';

export default function Header() {

  const [calendar, setCalendar] = useState('00/00/0000');
  const [clock, setClock] = useState('00:00:00');

  const renderCalendar = () => {
    const date = new Date();
    const calendarObj = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
    setCalendar(`${calendarObj.day}/${calendarObj.month}/${calendarObj.year}`);
  };

  const renderClock = () => {
    const date = new Date();
    const clockObj = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      seconds: date.getSeconds(),
    }
    const minute = clockObj.minute < 10 ? `0${clockObj.minute}`: clockObj.minute;
    const second = clockObj.seconds < 10 ? `0${clockObj.seconds}`: clockObj.seconds;
    const time = `${clockObj.hour}:${minute}:${second}`;

    setClock(time);
  };

  useEffect(() => {
    renderCalendar();
  });

  useEffect(() => {
    const TIME = 1000;
    const interval = setInterval(() => {
      renderClock();
    }, TIME);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <header className="header-container">
      <div>
        <select>
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
        </select>
      </div>
      <div>
        <input type="text" name="search-input" id="search-input" placeholder='Pesquisar...'/>
      </div>
      <div>
        <div>{ calendar }</div>
        <div>{ clock }</div>
      </div>
    </header>
  );
}