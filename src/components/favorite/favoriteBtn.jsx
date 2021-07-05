import React from "react";
import { useState } from "react";
import s from "./index.module.scss";
import { renderFavoriteBtn } from "../common";

export const FavoriteBtn = (props) => {
    const [active, setActive] = useState(props.item.like);

    const onClick = (evt) => {setActive(!active)}

    return (
        <button type="button" className={s.favoriteBtn} onClick = {onClick}>
            {renderFavoriteBtn(active)}
        </button>
    )
}