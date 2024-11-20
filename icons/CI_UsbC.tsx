
"use client";
import React from "react";
import {IconProps, UsbC} from "react-bootstrap-icons";

export const CI_UsbC : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UsbC {...props}/>
        </>
    );
}
