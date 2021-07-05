import React from "react";
import { substituteCurrency, findSrc } from "../../components/common";
import { Controll } from "./controll/controll";
import { ButtonAdd } from "./buttonAdd/buttonAdd";
import { FavoriteBtn } from "../../components/favorite/favoriteBtn";
import s from "./index-product-page.module.scss";
import { IItem } from "../../models/item";

interface IProps {
    item: IItem
}

const ProductPage: React.FC<IProps> = ({ item }) => {
    return (
        <div className={s.product}>
            <div className={s.wrapperImg}>
                <img className={s.img} src={findSrc(item.picture.path)} alt={item.picture.alt} />
            </div>
            <div className={s.wrapperDescription}>
                <h2 className={s.header1}>{item.name}</h2>
                <p>{item.info}</p>
                <h3 className={s.header2}>Details</h3>
                <p>{item.details}</p>
                <div className={s.wrapperControl}>
                    <div className={s.flex}>
                        <span className={s.price}>{substituteCurrency(item.price.currency)} {item.price.value}</span>
                        <Controll />
                    </div>
                    <div className={s.flexControl}>
                        <ButtonAdd />
                        <FavoriteBtn item={item} />
                    </div>
                </div>
            </div>
            )
        </div >
    )
}

export { ProductPage };