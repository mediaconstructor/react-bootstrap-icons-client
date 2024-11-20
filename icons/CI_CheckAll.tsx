
"use client";
import React from "react";
import {IconProps, CheckAll} from "react-bootstrap-icons";

export const CI_CheckAll : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CheckAll {...props}/>
        </>
    );
}
