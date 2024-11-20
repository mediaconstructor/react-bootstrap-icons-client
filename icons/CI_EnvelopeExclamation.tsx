
"use client";
import React from "react";
import {IconProps, EnvelopeExclamation} from "react-bootstrap-icons";

export const CI_EnvelopeExclamation : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopeExclamation {...props}/>
        </>
    );
}
