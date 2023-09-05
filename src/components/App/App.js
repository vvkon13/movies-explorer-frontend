import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
import Navigation from '../Navigation/Navigation';
import ModalErrorWindow from '../ModalErrorWindow/ModalErrorWindow';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { isScreenSm, isScreenLg } = useResize();
  const [isLoading, setIsLoading] = useState(false);
  const initialStateCurrentUser = { name: '', email: '' };
  const [currentUser, setCurrentUser] = useState(initialStateCurrentUser);
  const [isVisibleNavigation, setIsVisibleNavigation] = useState(false);
  const [isVisibleModalWindow, setIsVisibleModalWindow] = useState(false);
  const [err, setErr] = useState('');

  const navigate = useNavigate();

  function handleRegistration({ email, name }) {
    setIsLoading(true);
    setTimeout(()=>{
      setCurrentUser({email, name});
      setIsLoading(false);
      navigate("/signin");
    }, 1300);
  }

  function handleAuthorization({ email }) {
    setIsLoading(true);
    setTimeout(()=>{
      if (email === currentUser.email) {
        setLoggedIn(true);
        setIsLoading(false);
        navigate("/saved-movies");  
      }
      else {
        setIsLoading(false);
        setErr('Вы ввели неправильный логин или пароль.');
        setIsVisibleModalWindow(true);
      }
      setIsLoading(false);
    }, 1300);
  }

  function handleExitProfile() {
    setLoggedIn(false);
    navigate("/");
  }
 
  function handleChangeProfile({ email, name }) {
    setIsLoading(true);
    setTimeout(()=>{
      setCurrentUser({email, name});
      setIsLoading(false);
    }, 1300);
  }

  function handleCloseModalWindow () {
    setIsVisibleModalWindow(false);
  }

  function handleClickAddMovies () {
    setIsLoading(true);
    setTimeout(setIsLoading(false), 1300);
  }

  function sayHi() {
    setIsVisibleNavigation(!isVisibleNavigation);
  }

  useEffect(()=> {
    if (isScreenLg && isVisibleNavigation) {
      setIsVisibleNavigation(false)
    }
  },[isScreenLg,isVisibleNavigation])

  return (
    <div className="app">
      <AppContext.Provider
        value={
          {
            isScreenSm,
            isScreenLg,
            loggedIn,
            isLoading,
            isVisibleNavigation,
            isVisibleModalWindow,
          }}>
        <CurrentUserContext.Provider value={{ currentUser }}>
          <Header sayHi={sayHi} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies handleClickAdd={handleClickAddMovies} />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={
            <Profile 
            handleChangeProfile={handleChangeProfile}
            handleExitProfile={handleExitProfile} />} />
            <Route path="/signin" element={<Login handleAuthorization={handleAuthorization} />} />
            <Route path="/signup" element={<Register handleRegistration={handleRegistration} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
          <ModalErrorWindow err={err} onClose={handleCloseModalWindow}/>
          <Navigation onClose={sayHi} />
        </CurrentUserContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;

