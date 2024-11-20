
"use client";
import React from "react";
import {IconProps, UsbPlugFill} from "react-bootstrap-icons";

export const CI_UsbPlugFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UsbPlugFill {...props}/>
        </>
    );
}
