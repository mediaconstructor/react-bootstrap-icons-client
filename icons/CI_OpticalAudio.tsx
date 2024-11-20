
"use client";
import React from "react";
import {IconProps, OpticalAudio} from "react-bootstrap-icons";

export const CI_OpticalAudio : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <OpticalAudio {...props}/>
        </>
    );
}
