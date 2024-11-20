
"use client";
import React from "react";
import {IconProps, WebcamFill} from "react-bootstrap-icons";

export const CI_WebcamFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <WebcamFill {...props}/>
        </>
    );
}
