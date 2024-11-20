
"use client";
import React from "react";
import {IconProps, Wrench} from "react-bootstrap-icons";

export const CI_Wrench : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Wrench {...props}/>
        </>
    );
}
