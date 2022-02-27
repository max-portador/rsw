import React from "react";
import style from "./PreLoader.module.css";

const PreLoader = (props) => {
    return (
        <div className={style.lds_grid}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default PreLoader;