
"use client";
import React from "react";
import {IconProps, StopBtn} from "react-bootstrap-icons";

export const CI_StopBtn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <StopBtn {...props}/>
        </>
    );
}