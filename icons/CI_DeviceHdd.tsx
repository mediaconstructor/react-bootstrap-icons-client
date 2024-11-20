
"use client";
import React from "react";
import {IconProps, DeviceHdd} from "react-bootstrap-icons";

export const CI_DeviceHdd : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DeviceHdd {...props}/>
        </>
    );
}
