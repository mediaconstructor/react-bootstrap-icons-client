
"use client";
import React from "react";
import {IconProps, CurrencyBitcoin} from "react-bootstrap-icons";

export const CI_CurrencyBitcoin : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CurrencyBitcoin {...props}/>
        </>
    );
}
