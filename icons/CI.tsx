"use client";

import * as Icons from "react-bootstrap-icons";
import {IconProps} from "react-bootstrap-icons";
import React from "react";

type CIProperties = {
    icon : string;
} & IconProps

export const CI : React.FC<CIProperties> = (props) => {
    const keys = Object.keys(Icons)
    if(keys.includes(props.icon)) {
        const IconEl = props.icon;
        return (
            <>
                <IconEl {...props} />
            </>
        )
    }
    return (<></>);
}