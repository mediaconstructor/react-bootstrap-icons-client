
"use client";
import React from "react";
import {IconProps, VolumeOff} from "react-bootstrap-icons";

export const CI_VolumeOff : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <VolumeOff {...props}/>
        </>
    );
}
