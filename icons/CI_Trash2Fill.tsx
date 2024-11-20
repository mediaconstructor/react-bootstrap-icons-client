
"use client";
import React from "react";
import {IconProps, Trash2Fill} from "react-bootstrap-icons";

export const CI_Trash2Fill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Trash2Fill {...props}/>
        </>
    );
}
