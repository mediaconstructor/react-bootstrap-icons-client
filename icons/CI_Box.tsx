
"use client";
import React from "react";
import {IconProps, Box} from "react-bootstrap-icons";

export const CI_Box : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Box {...props}/>
        </>
    );
}
