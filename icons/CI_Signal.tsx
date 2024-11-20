
"use client";
import React from "react";
import {IconProps, Signal} from "react-bootstrap-icons";

export const CI_Signal : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Signal {...props}/>
        </>
    );
}
