
"use client";
import React from "react";
import {IconProps, CreditCard} from "react-bootstrap-icons";

export const CI_CreditCard : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CreditCard {...props}/>
        </>
    );
}
