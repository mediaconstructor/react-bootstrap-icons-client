
"use client";
import React from "react";
import {IconProps, Grid3x2Gap} from "react-bootstrap-icons";

export const CI_Grid3x2Gap : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Grid3x2Gap {...props}/>
        </>
    );
}
