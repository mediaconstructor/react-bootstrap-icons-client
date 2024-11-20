
"use client";
import React from "react";
import {IconProps, CameraVideoOff} from "react-bootstrap-icons";

export const CI_CameraVideoOff : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CameraVideoOff {...props}/>
        </>
    );
}
