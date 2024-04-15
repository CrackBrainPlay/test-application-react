import React from 'react';
import './App.css';
import style from './App.css';
import ListContainer from './components/List/ListContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      {/* <List state={props.state.profilePage} /> */}
      <ListContainer />
      <div className={style.content}>
        <Routes>
          <Route path="/Profile/:userId" element={<ProfileContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
