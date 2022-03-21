import React from "react";
import css from "./Pagination.module.css";

const Pagination = ({currentPage, onPageChanged, totalUsersCount, pageSize }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p =>
                <span key={p}
                      className={`${css.pageNum} ${ currentPage === p && css.selected}`}
                      onClick={() => { onPageChanged(p) }}>
                        {p}
                    </span>)}
        </div>
    )
}

export default Pagination;