
"use client";
import React from "react";
import {IconProps, Camera} from "react-bootstrap-icons";

export const CI_Camera : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Camera {...props}/>
        </>
    );
}
