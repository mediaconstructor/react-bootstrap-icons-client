
"use client";
import React from "react";
import {IconProps, CameraFill} from "react-bootstrap-icons";

export const CI_CameraFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CameraFill {...props}/>
        </>
    );
}
