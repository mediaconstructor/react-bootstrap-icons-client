
"use client";
import React from "react";
import {IconProps, Files} from "react-bootstrap-icons";

export const CI_Files : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Files {...props}/>
        </>
    );
}
