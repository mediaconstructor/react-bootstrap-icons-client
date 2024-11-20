
"use client";
import React from "react";
import {IconProps, CartPlusFill} from "react-bootstrap-icons";

export const CI_CartPlusFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CartPlusFill {...props}/>
        </>
    );
}
