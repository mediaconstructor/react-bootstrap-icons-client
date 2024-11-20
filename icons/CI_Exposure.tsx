
"use client";
import React from "react";
import {IconProps, Exposure} from "react-bootstrap-icons";

export const CI_Exposure : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Exposure {...props}/>
        </>
    );
}
