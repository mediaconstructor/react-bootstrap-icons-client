"use client";

import * as Icons from "react-bootstrap-icons";
import {IconProps} from "react-bootstrap-icons";
import React from "react";

export const CI : React.FC<{icon : string, props : IconProps}> = ({icon, props}) => {
    const keys = Object.keys(Icons)
    if(keys.includes(icon)) {
        const IconEl = icon;
        return (
            <>
                <IconEl {...props} />
            </>
        )
    }
    return (<></>);
}