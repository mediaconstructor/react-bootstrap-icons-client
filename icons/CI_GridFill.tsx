
"use client";
import React from "react";
import {IconProps, GridFill} from "react-bootstrap-icons";

export const CI_GridFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GridFill {...props}/>
        </>
    );
}
