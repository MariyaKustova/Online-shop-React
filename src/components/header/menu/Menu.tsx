import React, { FC } from "react";
import s from "./index.module.scss"
import { IMenu } from "../../../static-data/menu";
import { Link } from "react-router-dom";

interface IProps {
    className?: string,
    list: Array<IMenu>,
}

export const Menu: FC<IProps> = ({ list }) => {
    return (
        <div className={s.menu}>
            {list.map(item => <Link className={s.link} key={item.id} to={ item.href.replace("/:id?", "") }>{item.label}</Link>)}
        </div>
    )
}