
"use client";
import React from "react";
import {IconProps, Circle} from "react-bootstrap-icons";

export const CI_Circle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Circle {...props}/>
        </>
    );
}
