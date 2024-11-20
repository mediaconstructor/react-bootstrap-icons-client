
"use client";
import React from "react";
import {IconProps, Highlights} from "react-bootstrap-icons";

export const CI_Highlights : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Highlights {...props}/>
        </>
    );
}
