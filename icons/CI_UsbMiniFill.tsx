
"use client";
import React from "react";
import {IconProps, UsbMiniFill} from "react-bootstrap-icons";

export const CI_UsbMiniFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UsbMiniFill {...props}/>
        </>
    );
}
