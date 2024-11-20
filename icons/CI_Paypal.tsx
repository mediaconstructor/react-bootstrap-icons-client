
"use client";
import React from "react";
import {IconProps, Paypal} from "react-bootstrap-icons";

export const CI_Paypal : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Paypal {...props}/>
        </>
    );
}
