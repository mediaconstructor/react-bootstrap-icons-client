
"use client";
import React from "react";
import {IconProps, Stripe} from "react-bootstrap-icons";

export const CI_Stripe : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Stripe {...props}/>
        </>
    );
}
