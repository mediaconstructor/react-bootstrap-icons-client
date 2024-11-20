
"use client";
import React from "react";
import {IconProps, Dot} from "react-bootstrap-icons";

export const CI_Dot : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Dot {...props}/>
        </>
    );
}
