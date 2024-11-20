
"use client";
import React from "react";
import {IconProps, Save} from "react-bootstrap-icons";

export const CI_Save : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Save {...props}/>
        </>
    );
}
