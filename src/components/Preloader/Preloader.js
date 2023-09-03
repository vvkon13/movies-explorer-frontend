import React, { useContext } from 'react'
import './Preloader.css'
import { AppContext } from '../../contexts/AppContext';

const Preloader = () => {
    const {isLoading} = useContext(AppContext);
    return isLoading && (
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
