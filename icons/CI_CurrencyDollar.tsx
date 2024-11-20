
"use client";
import React from "react";
import {IconProps, CurrencyDollar} from "react-bootstrap-icons";

export const CI_CurrencyDollar : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CurrencyDollar {...props}/>
        </>
    );
}
