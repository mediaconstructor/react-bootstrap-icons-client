
"use client";
import React from "react";
import {IconProps, ClockHistory} from "react-bootstrap-icons";

export const CI_ClockHistory : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ClockHistory {...props}/>
        </>
    );
}
