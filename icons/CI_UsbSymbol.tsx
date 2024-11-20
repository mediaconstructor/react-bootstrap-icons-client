
"use client";
import React from "react";
import {IconProps, UsbSymbol} from "react-bootstrap-icons";

export const CI_UsbSymbol : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UsbSymbol {...props}/>
        </>
    );
}
