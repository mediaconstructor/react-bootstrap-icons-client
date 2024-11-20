
"use client";
import React from "react";
import {IconProps, CartFill} from "react-bootstrap-icons";

export const CI_CartFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CartFill {...props}/>
        </>
    );
}
