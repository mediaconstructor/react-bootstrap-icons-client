
"use client";
import React from "react";
import {IconProps, PencilSquare} from "react-bootstrap-icons";

export const CI_PencilSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PencilSquare {...props}/>
        </>
    );
}
