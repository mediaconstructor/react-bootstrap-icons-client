
"use client";
import React from "react";
import {IconProps, Grid} from "react-bootstrap-icons";

export const CI_Grid : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Grid {...props}/>
        </>
    );
}
