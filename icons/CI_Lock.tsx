
"use client";
import React from "react";
import {IconProps, Lock} from "react-bootstrap-icons";

export const CI_Lock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Lock {...props}/>
        </>
    );
}
