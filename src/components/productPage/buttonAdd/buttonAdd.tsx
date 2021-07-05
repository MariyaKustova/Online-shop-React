import React from "react";
import s from "./index.module.scss";

export const ButtonAdd = () => {
    return (
        <button className={s.addButton} type="button" aria-label="add to cart">Add to cart</button>
    )
}