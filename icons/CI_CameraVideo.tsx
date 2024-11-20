
"use client";
import React from "react";
import {IconProps, CameraVideo} from "react-bootstrap-icons";

export const CI_CameraVideo : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CameraVideo {...props}/>
        </>
    );
}
