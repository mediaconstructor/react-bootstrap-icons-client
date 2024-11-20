
"use client";
import React from "react";
import {IconProps, UsbPlug} from "react-bootstrap-icons";

export const CI_UsbPlug : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UsbPlug {...props}/>
        </>
    );
}
