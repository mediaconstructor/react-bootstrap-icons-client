
"use client";
import React from "react";
import {IconProps, StopCircle} from "react-bootstrap-icons";

export const CI_StopCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <StopCircle {...props}/>
        </>
    );
}
