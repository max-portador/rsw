import React, {useState} from "react";
import cn from 'classnames';
import css from "./Pagination.module.css";

const Pagination = ({currentPage, onPageChanged, totalUsersCount: totalItemsCount, pageSize, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 &&
            <button className={css.pageNum}
                    onClick={() => {
                        onPageChanged(leftPortionNumber - portionSize);
                        setPortionNumber(portionNumber - 1);
                    }}> {'<'} </button>
            }

            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p =>
                <span key={p}
                      className={ cn( css.pageNum, {[css.selected]: currentPage === p})}
                      onClick={() => { onPageChanged(p) }}>
                        {p}
                    </span>)}

            {portionNumber < portionCount &&
                <button className={css.pageNum}
                        onClick={() => {
                            onPageChanged(rightPortionNumber + 1);
                            setPortionNumber(portionNumber + 1);
                        }}> {'>'} </button>
            }

        </div>
    )
}

export default Pagination;