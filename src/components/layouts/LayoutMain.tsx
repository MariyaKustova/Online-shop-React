import React from "react";
import { Header } from "../header/header";
import { MENU } from "../../static-data/menu";
import { Route, Switch } from "react-router";
import s from "./index.module.scss"

export const LayoutMain = () => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <Header />
            </header>
            <main>
                <Switch>
                    {MENU.map((item) => (
                        <Route component={item.component} exact={item.exact} key={item.href} path={item.href} />
                    ))}
                </Switch>
            </main>
        </div>
    )
}