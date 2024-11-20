
"use client";
import React from "react";
import {IconProps, EnvelopeCheck} from "react-bootstrap-icons";

export const CI_EnvelopeCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopeCheck {...props}/>
        </>
    );
}
