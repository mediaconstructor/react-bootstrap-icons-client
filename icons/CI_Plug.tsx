
"use client";
import React from "react";
import {IconProps, Plug} from "react-bootstrap-icons";

export const CI_Plug : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Plug {...props}/>
        </>
    );
}
