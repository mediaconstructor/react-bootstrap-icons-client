
"use client";
import React from "react";
import {IconProps, Grid3x3Gap} from "react-bootstrap-icons";

export const CI_Grid3x3Gap : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Grid3x3Gap {...props}/>
        </>
    );
}
