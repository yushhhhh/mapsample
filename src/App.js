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
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<DayList/>} />
          <Route path="day/:day" element={<Day/>} />
          <Route path="/create_word" element={<CreateWord/>} />
          <Route path="/create_day" element={<CreateDay/>} />
          <Route path="*" element={<EmptyPage/>} />
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;
