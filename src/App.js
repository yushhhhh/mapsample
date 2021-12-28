import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header';
import DayList from './DayList';
import Day from './Day';
import EmptyPage from './EmptyPage';
import CreateWord from './CreateWord'
import CreateDay from './CreateDay';

function App() {
  return (   

      <div className="App">
        <div className='header'>
          <h2>
            <a href='/'>토익 영단어(고급)</a>
          </h2>
          <div className='menu'>
            <a href='#' className='link'>단어추가</a>
            <a href='#' className='link'>Day추가</a>
          </div>
        </div>      
        <DayList/>  
        <Day/>
      </div>  

  );
}

export default App;
