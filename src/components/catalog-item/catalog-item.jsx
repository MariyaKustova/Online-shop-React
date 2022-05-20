import React, { Component } from "react";
import s from "./index-catalog-item.module.scss";
import { renderFavoriteBtn, substituteCurrency, findSrc } from "../common";

export class CatalogItem extends Component {
    render() {
        return (
            <div className={s.Item}>
                <button type="button" className={s.favoriteBtn}>
                    {renderFavoriteBtn(this.props.like)}
                </button>
                <img className={s.img} src={findSrc(this.props.picture.path)} alt={this.props.picture.alt} />
                <h2 className={s.header}>{this.props.name}</h2>
                <p className={s.price}>{substituteCurrency(this.props.price.currency)} {this.props.price.value}</p>
            </div>
        )
    }
}