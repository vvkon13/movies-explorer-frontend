import React, { useContext } from 'react';
import logo from '../../image/logo.svg';
import { AppContext } from '../../contexts/AppContext';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import "./LogoPreloader.css";

function LogoPreloader() {
    const { isLoading } = useContext(AppContext);
    return (
        <>
            <Link to='/' сlassName='app__button logo'>
                {isLoading ? (
                    <Preloader />
                ) : (
                    <img src={logo} alt='Логотип' />
                )}
            </Link>
        </>
    );
}

export default LogoPreloader;
