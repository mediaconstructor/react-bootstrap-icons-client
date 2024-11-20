
"use client";
import React from "react";
import {IconProps, Stopwatch} from "react-bootstrap-icons";

export const CI_Stopwatch : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Stopwatch {...props}/>
        </>
    );
}
