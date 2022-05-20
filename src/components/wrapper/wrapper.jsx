import React, { useEffect, useState } from "react";
import s from "./index-wrapper.module.scss";
import {InputSearch} from "../header/input-search/input-search";
import { ButtonProfile } from "../header/button-profile/button-profile";
import { ButtonBusket } from "../header/button-busket/button-busket";
import { Catalog } from "../catalog-item/catalog-item";
import { ProductPage } from "../product-page/product-page";

const Wrapper = () => {
    const [item, setItem] = useState(null);
    const [items, setItems] = useState(null);

    const getData = async () => {
        try {
            const responsive = await fetch(`http://localhost:3006/item`);
            const data = await responsive.json();
            setItems(data.content);
        } catch (evt) {
            console.log("Error", evt)
        }
    };

    const getDataById = async (id) => {
        try {
            const responsive = await fetch(`http://localhost:3006/item/${id}`);
            const data = await responsive.json();
            setItem(data.content);
        } catch (evt) {
            console.log("Error", evt)
        }
    }

    useEffect(() => {
        getData()
    });

    const onExit = () => {
        setItem(null)
    }

    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <div className={s.flex}>
                    <InputSearch items={items}></InputSearch>
                    <div className={s.wrapper}>
                        <ButtonProfile></ButtonProfile>
                        <ButtonBusket></ButtonBusket>
                    </div>
                </div>
            </header>
            <main>
                <div className={s.catalog}>
                    {item ? (
                        <div
                            key={item.id}
                        >
                            <ProductPage {...item} onExit={onExit}></ProductPage>
                        </div>
                    ) : (
                        !!items ? (
                            !items.length ? (<div></div>) : (
                                <ul className={s.list} id="productList">
                                    <Catalog items = {items} getDataById = {getDataById}></Catalog>
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

export default Wrapper;