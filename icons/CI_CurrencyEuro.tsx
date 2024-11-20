
"use client";
import React from "react";
import {IconProps, CurrencyEuro} from "react-bootstrap-icons";

export const CI_CurrencyEuro : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CurrencyEuro {...props}/>
        </>
    );
}
