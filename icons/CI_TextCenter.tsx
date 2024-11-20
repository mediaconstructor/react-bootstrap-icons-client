
"use client";
import React from "react";
import {IconProps, TextCenter} from "react-bootstrap-icons";

export const CI_TextCenter : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TextCenter {...props}/>
        </>
    );
}
