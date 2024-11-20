
"use client";
import React from "react";
import {IconProps, Heart} from "react-bootstrap-icons";

export const CI_Heart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Heart {...props}/>
        </>
    );
}
