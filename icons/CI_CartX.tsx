
"use client";
import React from "react";
import {IconProps, CartX} from "react-bootstrap-icons";

export const CI_CartX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CartX {...props}/>
        </>
    );
}
