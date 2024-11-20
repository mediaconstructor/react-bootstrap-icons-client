
"use client";
import React from "react";
import {IconProps, Webcam} from "react-bootstrap-icons";

export const CI_Webcam : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Webcam {...props}/>
        </>
    );
}
