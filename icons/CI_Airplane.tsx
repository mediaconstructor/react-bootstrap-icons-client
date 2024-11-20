
"use client";
import React from "react";
import {IconProps, Airplane} from "react-bootstrap-icons";

export const CI_Airplane : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Airplane {...props}/>
        </>
    );
}
