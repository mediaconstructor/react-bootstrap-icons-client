
"use client";
import React from "react";
import {IconProps, Threads} from "react-bootstrap-icons";

export const CI_Threads : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Threads {...props}/>
        </>
    );
}
