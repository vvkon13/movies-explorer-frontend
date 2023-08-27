import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import { useResize } from '../../hooks/useResize';
import { AppContext } from '../../contexts/AppContext';

function App() {
  const handleLogOff = true;
  const { isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();

  return (
    <div className="App">
      <AppContext.Provider value={{ isScreenSm, isScreenMd, isScreenLg, isScreenXl, handleLogOff }}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

