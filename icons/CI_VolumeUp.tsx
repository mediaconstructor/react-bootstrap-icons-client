
"use client";
import React from "react";
import {IconProps, VolumeUp} from "react-bootstrap-icons";

export const CI_VolumeUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <VolumeUp {...props}/>
        </>
    );
}
