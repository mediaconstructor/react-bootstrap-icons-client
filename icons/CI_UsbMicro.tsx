
"use client";
import React from "react";
import {IconProps, UsbMicro} from "react-bootstrap-icons";

export const CI_UsbMicro : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UsbMicro {...props}/>
        </>
    );
}
