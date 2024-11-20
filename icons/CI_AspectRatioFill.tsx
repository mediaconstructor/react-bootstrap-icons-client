
"use client";
import React from "react";
import {IconProps, AspectRatioFill} from "react-bootstrap-icons";

export const CI_AspectRatioFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <AspectRatioFill {...props}/>
        </>
    );
}
