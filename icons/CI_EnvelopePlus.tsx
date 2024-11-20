
"use client";
import React from "react";
import {IconProps, EnvelopePlus} from "react-bootstrap-icons";

export const CI_EnvelopePlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopePlus {...props}/>
        </>
    );
}
