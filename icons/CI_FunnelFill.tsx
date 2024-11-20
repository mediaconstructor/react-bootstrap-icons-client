
"use client";
import React from "react";
import {IconProps, FunnelFill} from "react-bootstrap-icons";

export const CI_FunnelFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FunnelFill {...props}/>
        </>
    );
}
