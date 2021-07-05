import React from "react";
import s from "./index.module.scss"
import { InputSearch } from "./input-search/input-search";
import { Menu } from "./menu/Menu";
import { MENU} from "../../static-data/menu";

export const Header = () => {
    return (
        <div className={s.flex}>
            <InputSearch />
            <div className={s.wrapper}>
                <Menu list={MENU} />
            </div>
        </div>
    )
}