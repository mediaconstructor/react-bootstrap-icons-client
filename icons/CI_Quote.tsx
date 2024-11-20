
"use client";
import React from "react";
import {IconProps, Quote} from "react-bootstrap-icons";

export const CI_Quote : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Quote {...props}/>
        </>
    );
}
