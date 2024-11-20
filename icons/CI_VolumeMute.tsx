
"use client";
import React from "react";
import {IconProps, VolumeMute} from "react-bootstrap-icons";

export const CI_VolumeMute : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <VolumeMute {...props}/>
        </>
    );
}
