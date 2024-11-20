
"use client";
import React from "react";
import {IconProps, UsbMini} from "react-bootstrap-icons";

export const CI_UsbMini : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UsbMini {...props}/>
        </>
    );
}
