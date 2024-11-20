
"use client";
import React from "react";
import {IconProps, DashCircle} from "react-bootstrap-icons";

export const CI_DashCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DashCircle {...props}/>
        </>
    );
}
