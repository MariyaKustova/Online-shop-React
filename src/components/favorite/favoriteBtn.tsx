import React from "react";
import { useState } from "react";
import s from "./index.module.scss";
import { renderFavoriteBtn } from "../common";
import {IItem} from "../../models/item";

interface IFavovoriteBtnProps {
    item: IItem
}

export const FavoriteBtn = (props: IFavovoriteBtnProps) => {
    const [active, setActive] = useState(props.item.like);

    return (
        <button type="button" className={s.favoriteBtn} onClick={(evt: any) => { setActive(!active) }}>
            {renderFavoriteBtn(active)}
        </button>
    )
}