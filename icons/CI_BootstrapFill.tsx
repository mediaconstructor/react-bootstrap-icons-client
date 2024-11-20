
"use client";
import React from "react";
import {IconProps, BootstrapFill} from "react-bootstrap-icons";

export const CI_BootstrapFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BootstrapFill {...props}/>
        </>
    );
}
