
"use client";
import React from "react";
import {IconProps, Pen} from "react-bootstrap-icons";

export const CI_Pen : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Pen {...props}/>
        </>
    );
}
