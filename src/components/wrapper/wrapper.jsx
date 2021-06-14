import React, { Component } from "react";
import s from "./index-wrapper.module.scss";
import { InputSearch } from "../header/input-search/input-search";
import { ButtonProfile } from "../header/button-profile/button-profile";
import { ButtonBusket } from "../header/button-busket/button-busket";
import { CatalogItem } from "../catalog-item/catalog-item";
import { ProductPage } from "../product-page/product-page";

export class Wrapper extends Component {
    state = {
        item: null,
        items: null
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            const responsive = await fetch(`http://localhost:3006/item`);
            const data = await responsive.json();
            this.setState({
                items: data.content
            })
        } catch (evt) {
            console.log("Error", evt)
        }
    }

    getDataById = async (id) => {
        try {
            const responsive = await fetch(`http://localhost:3006/item/${id}`);
            const data = await responsive.json();
            this.setState({
                item: data.content
            })
        } catch (evt) {
            console.log("Error", evt)
        }
    }

    onExit = () => {
        this.setState({
            item: null
        })
    }

    render() {
        return (
            <div className={s.wrapper}>
                <header className={s.header}>
                    <div className={s.flex}>
                        <InputSearch></InputSearch>
                        <div className={s.wrapper}>
                            <ButtonProfile></ButtonProfile>
                            <ButtonBusket></ButtonBusket>
                        </div>
                    </div>
                </header>
                <main>
                    <div className={s.catalog}>
                        {this.state.item ? (
                            <div
                                key={this.state.item.id}
                            >
                                <ProductPage {...this.state.item} onExit={this.onExit}></ProductPage>                                
                            </div>
                        ) : (
                            !!this.state.items ? (
                                !this.state.items.length ? (<div></div>) : (
                                    <ul className={s.list}>
                                        {this.state.items.map(element =>
                                        <li className={s.item}
                                            key={element.id}
                                            onClick={() => this.getDataById(element.id)}>
                                            <CatalogItem {...element}></CatalogItem>
                                        </li>
                                        )}
                                    </ul>
                                )
                            )
                                : (
                                    <div>Loading...</div>
                                ))}
                    </div>
                </main>
            </div>
        );
    }
}