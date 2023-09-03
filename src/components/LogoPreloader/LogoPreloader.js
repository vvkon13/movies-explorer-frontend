import React, { useContext } from 'react';
import logo from '../../image/logo.svg';
import { AppContext } from '../../contexts/AppContext';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import "./LogoPreloader.css";

function LogoPreloader() {
    const { isLoading } = useContext(AppContext);
    return (
        <div>
            <NavLink to='/' className='app__button logo'>
                {isLoading ? (
                    <Preloader />
                ) : (
                    <img src={logo} alt='Логотип' />
                )}
            </NavLink>
        </div>
    );
}

export default LogoPreloader;
