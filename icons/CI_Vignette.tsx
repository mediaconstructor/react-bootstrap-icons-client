
"use client";
import React from "react";
import {IconProps, Vignette} from "react-bootstrap-icons";

export const CI_Vignette : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Vignette {...props}/>
        </>
    );
}
