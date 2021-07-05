import React from "react";
import { useState, useRef } from "react";
import s from "./index.module.scss"

export const Controll = () => {
    const [value, setValue] = useState(1);
    const myRef = useRef();    
    
    const onRemoveCount = () => {
        const value = parseInt(myRef.current.value, 10);
        if (value > 0) {
            setValue(value - 1)
        }
    }
        

    const onAddCount = () => setValue(parseInt(myRef.current.value, 10) + 1);

    const handleInput = (event) => {setValue(event.target.value)};

    return (
        <div className={s.wrapperInput}>
            <button onClick={onRemoveCount} className={s.btnRemove} type="button" aria-label="remove">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H5V11H19V13Z" fill="#E97F03" />
                </svg>
            </button>
            <label>
                <input ref={myRef} className={s.input} type="text" name="count" onChange={handleInput} value={value} />
            </label>
            <button onClick={onAddCount} className={s.btnAdd} type="button" aria-label="add">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E97F03" />
                </svg>
            </button>
        </div>
    )
}