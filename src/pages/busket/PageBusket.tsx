import React from 'react';
import s from "./index.module.scss";

export const PageBusket = () => {
    return (
        <main>            
            <div className={s.busket}>
                <p className={s.text}>Ваша корзина пока пуста</p>
            </div>
        </main>
    )
}
