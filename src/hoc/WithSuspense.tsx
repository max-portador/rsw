import React from "react";
import PreLoader from "../components/common/PreLoader/PreLoader";

const withSuspense = <WCP, >(WrappedComponent: React.ComponentType<WCP>) => {
    return (props: WCP) => {
        return <React.Suspense fallback={ <PreLoader/> }>
                    <WrappedComponent {...props}/>
                </React.Suspense>
    }
}

export default withSuspense;

