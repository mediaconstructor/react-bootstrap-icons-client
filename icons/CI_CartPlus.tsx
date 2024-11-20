
"use client";
import React from "react";
import {IconProps, CartPlus} from "react-bootstrap-icons";

export const CI_CartPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CartPlus {...props}/>
        </>
    );
}
