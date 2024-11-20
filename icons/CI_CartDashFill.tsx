
"use client";
import React from "react";
import {IconProps, CartDashFill} from "react-bootstrap-icons";

export const CI_CartDashFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CartDashFill {...props}/>
        </>
    );
}
