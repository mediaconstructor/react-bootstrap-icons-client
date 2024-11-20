
"use client";
import React from "react";
import {IconProps, Cash} from "react-bootstrap-icons";

export const CI_Cash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Cash {...props}/>
        </>
    );
}
