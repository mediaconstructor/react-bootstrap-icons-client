
"use client";
import React from "react";
import {IconProps, BoundingBox} from "react-bootstrap-icons";

export const CI_BoundingBox : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BoundingBox {...props}/>
        </>
    );
}
