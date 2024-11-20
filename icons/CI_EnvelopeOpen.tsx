
"use client";
import React from "react";
import {IconProps, EnvelopeOpen} from "react-bootstrap-icons";

export const CI_EnvelopeOpen : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopeOpen {...props}/>
        </>
    );
}
