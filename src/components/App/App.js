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
import { api } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { isScreenSm, isScreenLg, isScreenXl } = useResize();
  const [isLoading, setIsLoading] = useState(false);
  const initialStateCurrentUser = { name: '', email: '' };
  const [currentUser, setCurrentUser] = useState(initialStateCurrentUser);
  const [isVisibleNavigation, setIsVisibleNavigation] = useState(false);
  const [isVisibleModalWindow, setIsVisibleModalWindow] = useState(false);
  const [isCheckedShortFilmMovies, setIsCheckedShortFilmMovies]
    = useState(/^true$/i.test(localStorage.getItem('isCheckedCheckboxShortFilmMovies')));
  const [arrayIndexesCardsOnTableMovies, setArrayIndexesCardsOnTableMovies] = useState([]);
  const [arrayOfCardsMovies, setArrayOfCardsMovies] = useState([]);
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  function updateCardList(arrayIndexesAlreadyDisplayed, arrayResults, isShortFilms) {
    if (arrayResults.length === 0) return [];
    let maxItemPutOnTable = 0;
    let i = 0;
    let arr = [...arrayIndexesAlreadyDisplayed];
    if (arrayIndexesAlreadyDisplayed.length === 0) {
      maxItemPutOnTable = 5 + (isScreenSm && 3) + (isScreenXl && 4)
    }
    else {
      maxItemPutOnTable = 2 + (isScreenXl && 1);
      i = arrayIndexesAlreadyDisplayed[arrayIndexesAlreadyDisplayed.length - 1] + 1;
    }
    while ((i < arrayResults.length) && (maxItemPutOnTable > 0)) {
      if (isShortFilms) {
        if (arrayResults[i].duration < 40) {
          arr.push(i);
          maxItemPutOnTable--;
        }
      }
      else {
        arr.push(i);
        maxItemPutOnTable--;
      }
      i++;
    };
    return arr;
  }

  function handleSearchFilmsMovies({ requestText }) {
    setIsLoading(true);
    localStorage.setItem('requestText', requestText);
    moviesApi.getMovies()
      .then((data) => {
        let arr = [];
        if (requestText !== "**") {
          const requestTextUpperCase = requestText.toUpperCase();
          arr = data.filter(item => ((item.nameRU.toUpperCase().includes(requestTextUpperCase))
            || (item.nameEN.includes(requestTextUpperCase))));
        } else { arr = [...data]; }
        setArrayIndexesCardsOnTableMovies(updateCardList(
          [],
          arr,
          isCheckedShortFilmMovies
        ));
        setArrayOfCardsMovies(arr);
      })
      .catch(() => {
        openModalWindow("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      })
      .finally(() => setIsLoading(false));
  }

  function handleChangeCneckboxMovies() {
    setIsCheckedShortFilmMovies((prevIsCheckedShortFilmMovies) => {
      setArrayIndexesCardsOnTableMovies(updateCardList(
        [],
        arrayOfCardsMovies,
        !prevIsCheckedShortFilmMovies
      ));
      localStorage.setItem('isCheckedCheckboxShortFilmMovies', !prevIsCheckedShortFilmMovies);
      return !prevIsCheckedShortFilmMovies
    })
  }

  function handleClickAddMovies() {
    setIsLoading(true);
    setArrayIndexesCardsOnTableMovies(updateCardList(
      arrayIndexesCardsOnTableMovies,
      arrayOfCardsMovies,
      isCheckedShortFilmMovies
    ));
    setIsLoading(false);
  }


  function handleRegistration({ password, email, name }) {
    setIsLoading(true);
    api.signUp({ password, email, name })
      .then(() => {
        setCurrentUser({ email, name });
        navigate('/signin');
      })
      .catch((err) => {
        openModalWindow(err.message || 'Ошибочка');
      })
      .finally(() => setIsLoading(false));
  }

  function handleAuthorization({ password, email }) {
    setIsLoading(true);
    api.signIn({ password, email })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          api.getUserInformation()
            .then((user) => {
              setCurrentUser(user);
              setLoggedIn(true);
              navigate('/');
            })
        }
      })
      .catch((err) => {
        openModalWindow(err.message || 'Ошибочка');
      })
      .finally(() => setIsLoading(false));
  }

  function handleExitProfile() {
    setLoggedIn(false);
    setCurrentUser(initialStateCurrentUser);
    localStorage.removeItem('token');
    navigate("/");
  }

  function handleChangeProfile({ email, name }) {
    setIsLoading(true);
    api.setUserInformation({ email, name })
      .then(() => {
        setCurrentUser({ email, name });
      })
      .catch((err) => {
        openModalWindow(err.message || 'Ошибочка');
      })
      .finally(() => setIsLoading(false));
  }

  function handleCloseModalWindow() {
    setIsVisibleModalWindow(false);
  }

  function openModalWindow(message) {
    setErr(message);
    setIsVisibleModalWindow(true);
  }



  function sayHi() {
    setIsVisibleNavigation(!isVisibleNavigation);
  }

  useEffect(() => {
    if (isScreenLg && isVisibleNavigation) {
      setIsVisibleNavigation(false)
    }
  }, [isScreenLg, isVisibleNavigation])

  return (
    <div className='app'>
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
            <Route
              path="/movies"
              element={<Movies
                handleClickAdd={handleClickAddMovies}
                handleSearchFilms={handleSearchFilmsMovies}
                handleChangeCneckboxMovies={handleChangeCneckboxMovies}
                isCheckedShortFilmMovies={isCheckedShortFilmMovies}
                arrayIndexesCardsOnTableMovies={arrayIndexesCardsOnTableMovies}
                arrayOfCardsMovies={arrayOfCardsMovies}
              />} />
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
          <ModalErrorWindow err={err} onClose={handleCloseModalWindow} />
          <Navigation onClose={sayHi} />
        </CurrentUserContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;

