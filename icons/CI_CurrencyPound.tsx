
"use client";
import React from "react";
import {IconProps, CurrencyPound} from "react-bootstrap-icons";

export const CI_CurrencyPound : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CurrencyPound {...props}/>
        </>
    );
}
