
"use client";
import React from "react";
import {IconProps, CloudCheckFill} from "react-bootstrap-icons";

export const CI_CloudCheckFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CloudCheckFill {...props}/>
        </>
    );
}
