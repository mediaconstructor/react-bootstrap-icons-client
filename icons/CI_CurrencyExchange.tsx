
"use client";
import React from "react";
import {IconProps, CurrencyExchange} from "react-bootstrap-icons";

export const CI_CurrencyExchange : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CurrencyExchange {...props}/>
        </>
    );
}
