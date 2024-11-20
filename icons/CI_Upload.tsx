
"use client";
import React from "react";
import {IconProps, Upload} from "react-bootstrap-icons";

export const CI_Upload : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Upload {...props}/>
        </>
    );
}
