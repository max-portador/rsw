import React, {useState} from "react";
import css from "./Pagination.module.css";

const Pagination = ({currentPage, onPageChanged, totalUsersCount: totalItemsCount, pageSize, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)

    const calcLeftPortionNumber = (newPortion) => {
        return (newPortion - 1) * portionSize + 1
    }

    const calcRightPortionNumber = (newPortion) => {
        return newPortion * portionSize
    }


    let [borders, setBorders] = useState({left: calcLeftPortionNumber(portionNumber),
                                                                right: calcRightPortionNumber(portionNumber)
                                                                })


    debugger
    return (
        <div>
            {portionNumber > 1 &&
            <button className={css.pageNum}
                    onClick={() => {
                        onPageChanged(borders.left - portionSize);
                        setBorders({
                            left: calcLeftPortionNumber(portionNumber - 1),
                            right: calcRightPortionNumber(portionNumber - 1)
                        })

                        setPortionNumber(portionNumber - 1);
                    }}> {'<'} </button>
            }

            {pages
                .filter(p => p >= borders.left && p <= borders.right)
                .map(p =>
                <span key={p}
                      className={`${css.pageNum} ${ currentPage === p && css.selected}`}
                      onClick={() => { onPageChanged(p) }}>
                        {p}
                    </span>)}

            {portionNumber < portionCount &&
                <button className={css.pageNum}
                        onClick={() => {
                            onPageChanged(borders.right + 1);
                            setBorders({
                                left: calcLeftPortionNumber(portionNumber +   1),
                                right: calcRightPortionNumber(portionNumber + 1)
                            })
                            setPortionNumber(portionNumber + 1);
                        }}> {'>'} </button>
            }

        </div>
    )
}

export default Pagination;