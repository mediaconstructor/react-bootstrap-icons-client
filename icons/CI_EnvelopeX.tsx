
"use client";
import React from "react";
import {IconProps, EnvelopeX} from "react-bootstrap-icons";

export const CI_EnvelopeX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopeX {...props}/>
        </>
    );
}
