import React from "react";
import s from "./button-back.module.scss";

export const ButtonBack = function() {
    return (
        <button className={s.button} type="button">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="26.003px" viewBox="0 0 50 26.003" enable-background="new 0 0 50 26.003" xmlSpace="preserve">
                <polygon points="50,11.002 7.659,11.002 15.833,2.828 13.005,0 0,12.998 0.003,13.001 0,13.005 13.005,26.003 15.833,23.175 7.661,15.002 50,15.002 " />
            </svg>
        </button>
    )
}