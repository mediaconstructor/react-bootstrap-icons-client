
"use client";
import React from "react";
import {IconProps, Cart} from "react-bootstrap-icons";

export const CI_Cart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Cart {...props}/>
        </>
    );
}
