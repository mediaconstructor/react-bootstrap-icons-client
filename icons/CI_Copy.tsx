
"use client";
import React from "react";
import {IconProps, Copy} from "react-bootstrap-icons";

export const CI_Copy : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Copy {...props}/>
        </>
    );
}
