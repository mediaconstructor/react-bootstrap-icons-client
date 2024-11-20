
"use client";
import React from "react";
import {IconProps, FilePpt} from "react-bootstrap-icons";

export const CI_FilePpt : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilePpt {...props}/>
        </>
    );
}
