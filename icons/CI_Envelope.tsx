
"use client";
import React from "react";
import {IconProps, Envelope} from "react-bootstrap-icons";

export const CI_Envelope : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Envelope {...props}/>
        </>
    );
}
