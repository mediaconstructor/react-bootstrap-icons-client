
"use client";
import React from "react";
import {IconProps, CreditCardFill} from "react-bootstrap-icons";

export const CI_CreditCardFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CreditCardFill {...props}/>
        </>
    );
}
