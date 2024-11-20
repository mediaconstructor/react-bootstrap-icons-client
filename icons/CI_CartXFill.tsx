
"use client";
import React from "react";
import {IconProps, CartXFill} from "react-bootstrap-icons";

export const CI_CartXFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CartXFill {...props}/>
        </>
    );
}
