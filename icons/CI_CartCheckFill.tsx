
"use client";
import React from "react";
import {IconProps, CartCheckFill} from "react-bootstrap-icons";

export const CI_CartCheckFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CartCheckFill {...props}/>
        </>
    );
}
