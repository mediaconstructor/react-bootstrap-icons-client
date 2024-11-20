
"use client";
import React from "react";
import {IconProps, CashCoin} from "react-bootstrap-icons";

export const CI_CashCoin : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CashCoin {...props}/>
        </>
    );
}
