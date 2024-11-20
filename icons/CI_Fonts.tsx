
"use client";
import React from "react";
import {IconProps, Fonts} from "react-bootstrap-icons";

export const CI_Fonts : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Fonts {...props}/>
        </>
    );
}
