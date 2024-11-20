
"use client";
import React from "react";
import {IconProps, CameraReels} from "react-bootstrap-icons";

export const CI_CameraReels : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CameraReels {...props}/>
        </>
    );
}
