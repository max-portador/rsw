import React, {FC} from "react";
import style from "./PreLoader.module.css";

const PreLoader: FC = (props) => {
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