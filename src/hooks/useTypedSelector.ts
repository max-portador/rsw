import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/reduxStore";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector