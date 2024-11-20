
"use client";
import React from "react";
import {IconProps, VolumeDown} from "react-bootstrap-icons";

export const CI_VolumeDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <VolumeDown {...props}/>
        </>
    );
}
