import React from "react";
import { renderFavoriteBtn, substituteCurrency, findSrc } from "../common";
import s from "./index-product-page.module.scss";

export const ProductPage = (item) => {
    const inputCountProduct = document.querySelector("#input-count");
    const onRemoveCount = () => {
        let countProduct = Number(inputCountProduct.value);
        if (countProduct > 0) {
            countProduct -= 1;
        }        
        inputCountProduct.value = countProduct;
    }

    const onAddCount = () => {
        let countProduct = Number(inputCountProduct.value);
        countProduct += 1;
        inputCountProduct.value = countProduct;
    }

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
                        <div className={s.wrapperInput}>
                            <button onClick={onRemoveCount} className={s.btnRemove} type="button" aria-label="remove">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 13H5V11H19V13Z" fill="#E97F03" />
                                </svg>
                            </button>
                            <label>
                                <input id="input-count" className={s.input} type="text" defaultValue="1" name="count" min="0" />
                            </label>
                            <button onClick={onAddCount} className={s.btnAdd} type="button" aria-label="add">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E97F03" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={s.flexControl}>
                        <button className={s.addButton} type="button" aria-label="add to cart">Add to cart</button>
                        <button type="button" className={s.favoriteBtn}>
                            {renderFavoriteBtn(item.like)}
                        </button>
                    </div>
                    <button onClick={() => item.onExit()} type="button" className={s.exitButton}>Назад</button>
                </div>
            </div>
        </div >
    )
}

