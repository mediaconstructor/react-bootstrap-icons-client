
"use client";
import React from "react";
import {IconProps, Palette} from "react-bootstrap-icons";

export const CI_Palette : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Palette {...props}/>
        </>
    );
}
