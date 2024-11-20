
"use client";
import React from "react";
import {IconProps, SignStop} from "react-bootstrap-icons";

export const CI_SignStop : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SignStop {...props}/>
        </>
    );
}
