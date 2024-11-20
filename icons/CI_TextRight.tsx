
"use client";
import React from "react";
import {IconProps, TextRight} from "react-bootstrap-icons";

export const CI_TextRight : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TextRight {...props}/>
        </>
    );
}
