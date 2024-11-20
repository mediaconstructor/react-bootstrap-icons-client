
"use client";
import React from "react";
import {IconProps, CartCheck} from "react-bootstrap-icons";

export const CI_CartCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CartCheck {...props}/>
        </>
    );
}
