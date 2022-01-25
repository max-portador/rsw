import React from "react";
import css from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Content = () => {
    return  <div className={css.content}>
        <div>
            <img src="https://static.orgpage.ru/socialnewsphotos/3c/3cc80415aa324fa2833df20a6aaf7e3a.jpg"
                 className={css.img} alt="Praha"/>
        </div>
        <div>ava + description</div>
        <MyPosts/>
    </div>
}

export default Content;