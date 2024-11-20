
"use client";
import React from "react";
import {IconProps, Grid3x3} from "react-bootstrap-icons";

export const CI_Grid3x3 : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Grid3x3 {...props}/>
        </>
    );
}
