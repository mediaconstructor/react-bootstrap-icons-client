
"use client";
import React from "react";
import {IconProps, Alarm} from "react-bootstrap-icons";

export const CI_Alarm : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Alarm {...props}/>
        </>
    );
}
