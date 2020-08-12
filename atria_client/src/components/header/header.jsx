import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/564x/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" />
            <div className={s.loginBlock}>
                {props.isAuth ? (
                    <div>
                        {props.login} -
                        <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
