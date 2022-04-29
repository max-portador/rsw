import React, {FC, useState} from "react";
import cn from 'classnames';
import {useDispatch} from "react-redux";
import {requestUsers} from "../../../redux/usersReducer";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {AppDispatch} from "../../../redux/reduxStore";
import css from "./Pagination.module.css";

const Pagination: FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    const {pageSize, currentPage, portionSize, totalUsersCount, filter} = useTypedSelector(state =>
        state.usersPage)

    const getUsers = async (page: number) => {
        await dispatch(requestUsers(page, pageSize, filter))
    }


    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1)

    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return (<React.Fragment>
        {totalUsersCount <= pageSize ?
            null
            :
            <div className={css.pagination}>
                {portionNumber > 1
                    ?
                    <button className={css.pageNum}
                            onClick={async () => {
                                await getUsers(leftPortionNumber - portionSize);
                                setPortionNumber(portionNumber - 1);
                            }}> {'<'} </button>
                    :
                    <div style={{width: '54px'}}/>
                }
                {pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(p =>
                        <span key={p}
                              className={cn(css.pageNum, {[css.selected]: currentPage === p})}
                              onClick={() => {
                                  getUsers(p)
                              }}>
                        {p}
                    </span>)}

                {portionNumber < portionCount &&
                    <button className={css.pageNum}
                            onClick={async () => {
                                await getUsers(rightPortionNumber + 1);
                                setPortionNumber(portionNumber + 1);
                            }}> {'>'} </button>
                }
            </div>
        }
    </React.Fragment>)
}

export default Pagination;