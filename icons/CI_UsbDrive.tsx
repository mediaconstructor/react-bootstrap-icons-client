
"use client";
import React from "react";
import {IconProps, UsbDrive} from "react-bootstrap-icons";

export const CI_UsbDrive : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UsbDrive {...props}/>
        </>
    );
}
