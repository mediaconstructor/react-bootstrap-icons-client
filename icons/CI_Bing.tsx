
"use client";
import React from "react";
import {IconProps, Bing} from "react-bootstrap-icons";

export const CI_Bing : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bing {...props}/>
        </>
    );
}
