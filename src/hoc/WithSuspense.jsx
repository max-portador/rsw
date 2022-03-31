import React from "react";
import PreLoader from "../components/common/PreLoader/PreLoader";

const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={ <PreLoader/> }>
                    <Component {...props}/>
                </React.Suspense>
    }
}

export default withSuspense;

