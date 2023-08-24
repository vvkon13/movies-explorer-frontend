import React from "react";

function Header({ handleLogOff }) {
    return (
        <>
            <h1> Header </h1>
            {handleLogOff &&
                <h2>
                    Авторизован
                </h2>
            }
        </>
    );
}

export default Header;