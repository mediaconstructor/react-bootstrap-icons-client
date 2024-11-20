
"use client";
import React from "react";
import {IconProps, Triangle} from "react-bootstrap-icons";

export const CI_Triangle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Triangle {...props}/>
        </>
    );
}
