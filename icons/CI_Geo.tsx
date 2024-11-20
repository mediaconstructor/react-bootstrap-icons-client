
"use client";
import React from "react";
import {IconProps, Geo} from "react-bootstrap-icons";

export const CI_Geo : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Geo {...props}/>
        </>
    );
}
