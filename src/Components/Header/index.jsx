import React, { useState, useEffect, useContext } from 'react';
import CurrencyContext from '../../Context/CurrencyContext';
import SearchInput from './SearchInput';
import './style.css';

export default function Header() {

  const [calendar, setCalendar] = useState('00/00/0000');
  const [clock, setClock] = useState('00:00:00');
  const { setCurrency } = useContext(CurrencyContext);

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

  

  const onChangeCurrencyHandler = ({ target }) => {
    setCurrency(target.value);
  }

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
        <select onChange={ onChangeCurrencyHandler }>
          <option value="usd">USD</option>
          <option value="brl">BRL</option>
          <option value="jpy">JPY</option>
          <option value="eur">EUR</option>
        </select>
      </div>
      <SearchInput />
      <div className='header-time-container'>
        <div className="header-clock">{ clock }</div>
        <div className="header-calendar">{ calendar }</div>
      </div>
    </header>
  );
}