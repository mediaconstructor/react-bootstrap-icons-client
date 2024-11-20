
"use client";
import React from "react";
import {IconProps, ExclamationDiamond} from "react-bootstrap-icons";

export const CI_ExclamationDiamond : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ExclamationDiamond {...props}/>
        </>
    );
}
