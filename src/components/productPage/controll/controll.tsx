import React from "react";
import { useState } from "react";
import s from "./index.module.scss"

export const Controll = () => {
    const [value, setValue] = useState(1);

    const onRemoveCount = (event: any) => {
        const value = parseInt(event.current.value, 10);
        if (value > 0) {
            setValue(value - 1)
        }
    }

    return (
        <div className={s.wrapperInput}>
            <button onClick={(event) => onRemoveCount(event)} className={s.btnRemove} type="button" aria-label="remove">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H5V11H19V13Z" fill="#E97F03" />
                </svg>
            </button>
            <label>
                <input className={s.input} type="text" name="count" onChange={(event: any) => { setValue(event.target.value) }} value={value} />
            </label>
            <button onClick={(event: any) => setValue(parseInt(event.current.value, 10) + 1)} className={s.btnAdd} type="button" aria-label="add">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E97F03" />
                </svg>
            </button>
        </div>
    )
}