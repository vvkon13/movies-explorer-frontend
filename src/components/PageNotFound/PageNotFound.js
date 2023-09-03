import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css"; 

function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <section className="page-not-found">
      <h1 className ="page-not-found__header" >404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <button className="page-not-found__button app__link" onClick={goBack}>Назад</button>
    </section>
  );
}

export default PageNotFound;