
"use client";
import React from "react";
import {IconProps, FileMedical} from "react-bootstrap-icons";

export const CI_FileMedical : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileMedical {...props}/>
        </>
    );
}
