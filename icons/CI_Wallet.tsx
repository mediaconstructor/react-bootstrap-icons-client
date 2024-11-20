
"use client";
import React from "react";
import {IconProps, Wallet} from "react-bootstrap-icons";

export const CI_Wallet : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Wallet {...props}/>
        </>
    );
}
