
"use client";
import React from "react";
import {IconProps, Cursor} from "react-bootstrap-icons";

export const CI_Cursor : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Cursor {...props}/>
        </>
    );
}
