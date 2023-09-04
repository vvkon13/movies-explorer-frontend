import React, { useState } from 'react';
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const { isScreenSm, isScreenLg } = useResize();
  const [isLoading, setIsLoading] = useState(false);
  const initialStateCurrentUser = { name: '', email: '' };
  const [currentUser, setCurrentUser] = useState(initialStateCurrentUser);

  function handleTimeout() {
    setIsLoading(true);
    setTimeout(()=>{setIsLoading(false)},5000);
  }

  return (
    <div className="app">
      <AppContext.Provider
        value={
          {
            isScreenSm,
            isScreenLg,
            loggedIn,
            isLoading
          }}>
            <CurrentUserContext.Provider value={{ currentUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login handleAuthorization={handleTimeout}/>} />
          <Route path="/signup" element={<Register handleRegistration={handleTimeout} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        </CurrentUserContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;

