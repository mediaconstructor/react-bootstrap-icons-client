
"use client";
import React from "react";
import {IconProps, MarkerTip} from "react-bootstrap-icons";

export const CI_MarkerTip : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MarkerTip {...props}/>
        </>
    );
}
