import React from "react";
import s from "./index-catalog-item.module.scss";
import { renderFavoriteBtn, substituteCurrency, findSrc } from "../common";

export const Catalog = (items, getDataById) => {
    return (
        items.items.map(element =>
            <li className={s.listItem}
                key={element.id}
                onClick={() => items.getDataById(element.id)}>
                <div className={s.item}>
                    <button type="button" className={s.favoriteBtn}>
                        {renderFavoriteBtn(element.like)}
                    </button>
                    <img className={s.img} src={findSrc(element.picture.path)} alt={element.picture.alt} />
                    <h2 className={s.header}>{element.name}</h2>
                    <p className={s.price}>{substituteCurrency(element.price.currency)} {element.price.value}</p>
                </div>
            </li>
        )
    )
}
