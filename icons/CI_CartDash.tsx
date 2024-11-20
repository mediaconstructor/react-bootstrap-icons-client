
"use client";
import React from "react";
import {IconProps, CartDash} from "react-bootstrap-icons";

export const CI_CartDash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CartDash {...props}/>
        </>
    );
}
