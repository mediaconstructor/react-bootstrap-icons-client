
"use client";
import React from "react";
import {IconProps, UsbCFill} from "react-bootstrap-icons";

export const CI_UsbCFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UsbCFill {...props}/>
        </>
    );
}
