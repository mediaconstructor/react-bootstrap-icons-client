
"use client";
import React from "react";
import {IconProps, Pin} from "react-bootstrap-icons";

export const CI_Pin : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Pin {...props}/>
        </>
    );
}
