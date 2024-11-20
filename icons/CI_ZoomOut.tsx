
"use client";
import React from "react";
import {IconProps, ZoomOut} from "react-bootstrap-icons";

export const CI_ZoomOut : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ZoomOut {...props}/>
        </>
    );
}
