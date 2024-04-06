import React from 'react';
import './App.css';
import style from './App.css';

import List from './components/List/List';
import Profile from './components/Profile/Profile';
// import { Routes, Route } from 'react-router-dom';

// import { changeData, updateNewPostText } from './Redux/State.js';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      {/* <List profilePerson={props.profilePage} /> */}
      <List state={props.state.profilePage} />
      <div className={style.content}> <Profile />
        {/* <Routes> */}
        {/* <Route path="Profile/*"
            element={<Profile
            postsPage={props.state.profilePage}
            changeDate={props.changeData}
            updateNewPostText={props.updateNewPostText} />}/> */}
        {/* <Route path="Profile/*"
            element={<Profile />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
