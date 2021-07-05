import React from "react";
import s from "./index.module.scss";
import { substituteCurrency, findSrc } from "../common";
import { FavoriteBtn } from "../favorite/favoriteBtn";
import { IItem } from "../../models/item"

interface IProps {
    item: IItem
}

export const CatalogItem: React.FC<IProps> = ({ item }) => {
    return (
        <div className={s.item}>
            <div className={s.favoriteBtn}>
                <FavoriteBtn item={item} />
            </div>
            <img className={s.img} src={findSrc(item.picture.path)} alt={item.picture.alt} />
            <h2 className={s.header}>{item.name}</h2>
            <p className={s.price}>{substituteCurrency(item.price.currency)} {item.price.value}</p>
        </div >
    )
}
