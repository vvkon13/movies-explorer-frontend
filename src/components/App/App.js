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
import { ProtectedRoute } from "../ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { isScreenSm, isScreenLg, isScreenXl } = useResize();
  const [isLoading, setIsLoading] = useState(false);
  const initialStateCurrentUser = { name: '', email: '' };
  const [currentUser, setCurrentUser] = useState(initialStateCurrentUser);
  const [isVisibleNavigation, setIsVisibleNavigation] = useState(false);
  const [isVisibleModalWindow, setIsVisibleModalWindow] = useState(false);
  const [isCheckedShortFilmMovies, setIsCheckedShortFilmMovies]
    = useState(false);
  const [arrayIndexesCardsOnTableMovies, setArrayIndexesCardsOnTableMovies] = useState([]);
  const [arrayOfCardsMovies, setArrayOfCardsMovies] = useState(null);


  const [isCheckedShortFilmSavedMovies, setIsCheckedShortFilmSavedMovies]
    = useState(false);
  const [arrayIndexesCardsOnTableSavedMovies, setArrayIndexesCardsOnTableSavedMovies] = useState([]);
  const [arrayOfCardsSavedMovies, setArrayOfCardsSavedMovies] = useState(null);

  const [err, setErr] = useState('');
  const navigate = useNavigate();

  function updateCardList(arrayIndexesAlreadyDisplayed, arrayResults, isShortFilms) {
    if ((arrayResults === null) || (arrayResults.length === 0)) return [];
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
    Promise.all([moviesApi.getMovies(), api.getMovies()])
      .then(([data, dataSaved]) => {
        let arr = [];
        let arr2 = [];
        if (requestText !== "**") {
          const requestTextUpperCase = requestText.toUpperCase();
          arr = data.filter(item => ((item.nameRU.toUpperCase().includes(requestTextUpperCase))
            || (item.nameEN.includes(requestTextUpperCase))))
        } else { arr = [...data]; }
        arr2 = arr.map(item => {
          if (dataSaved.length === 0) {
            item.liked = false;
          }
          else if (dataSaved.find(element => element.movieId === item.id)) {
            item.liked = true;
          }
          else {
            item.liked = false;
          }
          item.thumbnail = `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`;
          item.image = `https://api.nomoreparties.co${item.image.url}`;
          return item;
        });
        console.log(arr2);
        let indexArr = updateCardList([], arr2, isCheckedShortFilmMovies);
        setArrayIndexesCardsOnTableMovies(indexArr);
        setArrayOfCardsMovies(arr2);
        localStorage.setItem('arrayIndexesCardsOnTableMovies', JSON.stringify(indexArr));
        localStorage.setItem('arrayOfCardsMovies', JSON.stringify(arr2));
      })
      .catch((err) => {
        console.log(err);
        openModalWindow("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      })
      .finally(() => setIsLoading(false));
  }

  function handleChangeCneckboxMovies() {
    setIsCheckedShortFilmMovies((prevIsCheckedShortFilmMovies) => {
      let indexArr = updateCardList(
        [],
        arrayOfCardsMovies,
        !prevIsCheckedShortFilmMovies
      );
      setArrayIndexesCardsOnTableMovies(indexArr);
      localStorage.setItem('isCheckedCheckboxShortFilmMovies', !prevIsCheckedShortFilmMovies);
      localStorage.setItem('arrayIndexesCardsOnTableMovies', JSON.stringify(indexArr));
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

  function handleRequestDataRecovery() {
    console.log('Восстанавливаем данные...')
    if (localStorage.getItem('arrayOfCardsMovies')) {
      setArrayOfCardsMovies(JSON.parse(localStorage.getItem('arrayOfCardsMovies')));
    }
    if (localStorage.getItem('arrayIndexesCardsOnTableMovies')) {
      setArrayIndexesCardsOnTableMovies(JSON.parse(localStorage.getItem('arrayIndexesCardsOnTableMovies')));
    }
    if (localStorage.getItem('isCheckedCheckboxShortFilmMovies')) {
      console.log(localStorage.getItem('isCheckedCheckboxShortFilmMovies'));
      console.log((localStorage.getItem('isCheckedCheckboxShortFilmMovies') === 'true'));
      setIsCheckedShortFilmMovies((localStorage.getItem('isCheckedCheckboxShortFilmMovies') === 'true'));
    }
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
    clearingLocalStorage();
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

  function handleMovieStatusUpdate(card) {
    setIsLoading(true)
    if (card.liked === true) {
      api.deleteMovie(card.id)
        .then(() => {
          card.liked = false;
          localStorage.setItem('arrayOfCardsMovies', JSON.stringify(arrayOfCardsMovies));
        })
        .catch((err) => {
          openModalWindow(err.message || 'Ошибочка');
        })
        .finally(() => {
          setIsLoading(false)
        });
    } else {
      api.addMovie({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: card.image,
        trailerLink: card.trailerLink,
        thumbnail: card.thumbnail,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN
      })
        .then(() => {
          card.liked = true;
          localStorage.setItem('arrayOfCardsMovies', JSON.stringify(arrayOfCardsMovies));
        })
        .catch((err) => {
          openModalWindow(err.message || 'Ошибочка');
        })
        .finally(() => {
          setIsLoading(false)
        });
    }
  }

  function clearingLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('requestText');
    localStorage.removeItem('arrayOfCardsMovies');
    localStorage.removeItem('arrayIndexesCardsOnTableMovies');
    localStorage.removeItem('isCheckedCheckboxShortFilmMovies');

  }

  const tockenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoading(true);
      api.keyAuthentication(token)
        .then(({ email, name }) => {
          setCurrentUser({ email, name });
          setLoggedIn(true);
          navigate('/');
        })
        .catch(() => {
          clearingLocalStorage();
        })
        .finally(() => setIsLoading(false));
    }
    clearingLocalStorage();
  }

  useEffect(() => {
    tockenCheck();
  }, []);

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
              element={
                <ProtectedRoute
                  element={Movies}
                  handleClickAdd={handleClickAddMovies}
                  handleSearchFilms={handleSearchFilmsMovies}
                  handleChangeCneckboxMovies={handleChangeCneckboxMovies}
                  isCheckedShortFilmMovies={isCheckedShortFilmMovies}
                  arrayIndexesCardsOnTableMovies={arrayIndexesCardsOnTableMovies}
                  arrayOfCardsMovies={arrayOfCardsMovies}
                  handleRequestDataRecovery={handleRequestDataRecovery}
                  handleMovieStatusUpdate={handleMovieStatusUpdate}
                />} />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                />}
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  handleChangeProfile={handleChangeProfile}
                  handleExitProfile={handleExitProfile}
                />}
            />
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

