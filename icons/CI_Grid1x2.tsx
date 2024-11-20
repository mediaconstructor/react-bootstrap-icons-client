
"use client";
import React from "react";
import {IconProps, Grid1x2} from "react-bootstrap-icons";

export const CI_Grid1x2 : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Grid1x2 {...props}/>
        </>
    );
}
