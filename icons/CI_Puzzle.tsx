
"use client";
import React from "react";
import {IconProps, Puzzle} from "react-bootstrap-icons";

export const CI_Puzzle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Puzzle {...props}/>
        </>
    );
}
