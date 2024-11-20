
"use client";
import React from "react";
import {IconProps, UsbFill} from "react-bootstrap-icons";

export const CI_UsbFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UsbFill {...props}/>
        </>
    );
}
