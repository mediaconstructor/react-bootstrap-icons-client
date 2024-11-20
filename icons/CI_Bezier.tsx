
"use client";
import React from "react";
import {IconProps, Bezier} from "react-bootstrap-icons";

export const CI_Bezier : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bezier {...props}/>
        </>
    );
}
