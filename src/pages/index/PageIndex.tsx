import React, { useEffect } from "react";
import s from "./index.module.scss";
import { CatalogItem } from "../../components/catalog-item/catalog-item";
import { useTypedSelector } from "../../hooks/useTapedSelector";
import { Link, useRouteMatch } from 'react-router-dom';
import { useActions } from "../../hooks/useAction";
import { ProductPage } from "../../components/productPage/product-page";

interface MatchParams {
    id?: string;
}

const PageIndex = () => {
    const { data } = useTypedSelector(state => state)
    const { data__getItemById } = useActions();
    const { params } = useRouteMatch<MatchParams>()

    const id = params.id ? parseInt(params.id, 10) || -1 : -1;

    useEffect(() => {
        if (id >= 0) {
            data__getItemById(id)
        }
        console.log("Привет", params);

    }, [id])

    if (!data.items) return <div>Loading...</div>

    return (
        <>
            {id >= 0 ? (
                <div>
                    {!!data.item ? <ProductPage item={data.item} /> : <div>Loading...</div>}
                </div>
            ) : (
                <div className={s.catalog}>
                    {data.items.length ? data.items?.map(item => (
                        <Link to={`/${item.id}`} key={item.id}><CatalogItem item={item} /></Link>
                    )) : <div>Список пуст</div>}
                </div>
            )
            }
        </>)
};

export default PageIndex;