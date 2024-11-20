
"use client";
import React from "react";
import {IconProps, Save2Fill} from "react-bootstrap-icons";

export const CI_Save2Fill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Save2Fill {...props}/>
        </>
    );
}
