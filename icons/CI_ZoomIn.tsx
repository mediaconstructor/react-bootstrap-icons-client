
"use client";
import React from "react";
import {IconProps, ZoomIn} from "react-bootstrap-icons";

export const CI_ZoomIn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ZoomIn {...props}/>
        </>
    );
}
