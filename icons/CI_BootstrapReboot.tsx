
"use client";
import React from "react";
import {IconProps, BootstrapReboot} from "react-bootstrap-icons";

export const CI_BootstrapReboot : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BootstrapReboot {...props}/>
        </>
    );
}
