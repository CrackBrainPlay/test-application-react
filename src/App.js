import React from 'react';
import './App.css';
import style from './App.css';
import List from './components/List/List';
import Profile from './components/Profile/Profile';
// import { changeDate, saveData } from './Redux/State.js';
// import { changeDate, saveData } from './Redux/State.js';
import { Routes, Route } from 'react-router-dom';



// import { changeData, updateNewPostText } from './Redux/State.js';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <List state={props.state.profilePage} />
      <div className={style.content}>
        <Routes>
          {/* <Route path="Profile/*" element={<Profile changeDate={props.changeDate} saveData={props.saveData} />} /> */}
          <Route path="Profile/*" element={<Profile state={props.state.profilePage} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
