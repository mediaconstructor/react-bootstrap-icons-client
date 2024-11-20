
"use client";
import React from "react";
import {IconProps, CurrencyRupee} from "react-bootstrap-icons";

export const CI_CurrencyRupee : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CurrencyRupee {...props}/>
        </>
    );
}
