
"use client";
import React from "react";
import {IconProps, Watch} from "react-bootstrap-icons";

export const CI_Watch : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Watch {...props}/>
        </>
    );
}
