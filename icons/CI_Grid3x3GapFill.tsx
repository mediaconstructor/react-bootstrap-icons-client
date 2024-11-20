
"use client";
import React from "react";
import {IconProps, Grid3x3GapFill} from "react-bootstrap-icons";

export const CI_Grid3x3GapFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Grid3x3GapFill {...props}/>
        </>
    );
}
