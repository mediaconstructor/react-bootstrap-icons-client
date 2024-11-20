
"use client";
import React from "react";
import {IconProps, Exclude} from "react-bootstrap-icons";

export const CI_Exclude : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Exclude {...props}/>
        </>
    );
}
