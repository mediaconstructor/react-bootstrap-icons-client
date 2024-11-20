
"use client";
import React from "react";
import {IconProps, EnvelopeDash} from "react-bootstrap-icons";

export const CI_EnvelopeDash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopeDash {...props}/>
        </>
    );
}
