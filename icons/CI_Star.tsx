
"use client";
import React from "react";
import {IconProps, Star} from "react-bootstrap-icons";

export const CI_Star : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Star {...props}/>
        </>
    );
}
