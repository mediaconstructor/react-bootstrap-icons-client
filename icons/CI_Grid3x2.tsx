
"use client";
import React from "react";
import {IconProps, Grid3x2} from "react-bootstrap-icons";

export const CI_Grid3x2 : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Grid3x2 {...props}/>
        </>
    );
}
