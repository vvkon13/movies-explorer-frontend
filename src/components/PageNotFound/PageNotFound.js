import React from "react";
import { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import "./PageNotFound.css";

function PageNotFound() {
  const { loggedIn } = useContext(AppContext);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return loggedIn ?
    <Navigate to="/" replace /> :
  (
    <main className="page-not-found">
      <section>
        <h1 className="page-not-found__header" >404</h1>
        <p className="page-not-found__text">Страница не найдена</p>
        <button className="page-not-found__button app__link" onClick={goBack} type="button">Назад</button>
      </section>
    </main>
  );
}

export default PageNotFound;