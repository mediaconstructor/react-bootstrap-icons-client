
"use client";
import React from "react";
import {IconProps, EnvelopeAtFill} from "react-bootstrap-icons";

export const CI_EnvelopeAtFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopeAtFill {...props}/>
        </>
    );
}
