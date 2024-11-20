
"use client";
import React from "react";
import {IconProps, EnvelopeAt} from "react-bootstrap-icons";

export const CI_EnvelopeAt : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopeAt {...props}/>
        </>
    );
}
