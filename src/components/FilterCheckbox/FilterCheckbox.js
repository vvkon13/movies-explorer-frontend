import React from "react";
import { useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <label className="filter-checkbox app__button">
            <input
                className="filter-checkbox__input"
                type="checkbox"
                onChange={() => {
                    setIsChecked(!isChecked);
                }}
            />
            {isChecked && (<svg
                className="filter-checkbox__icon"
                aria-hidden="true"
                width="36"
                height="20"
                viewBox="0 0 36 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="3" width="34" height="14" rx="7" fill="#2BE080" />
                <circle cx="28" cy="10" r="5" fill="white" />
            </svg>)}
            {!isChecked && (<svg
                className="filter-checkbox__icon"
                aria-hidden="true"
                width="36"
                height="20"
                viewBox="0 0 36 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="3" width="34" height="14" rx="7" fill="#343434" />
                <circle cx="8" cy="10" r="5" fill="#A0A0A0" />
            </svg>)}
            Короткометражки
        </label>
    );
}

export default FilterCheckbox;