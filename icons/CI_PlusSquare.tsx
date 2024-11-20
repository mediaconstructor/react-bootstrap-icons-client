
"use client";
import React from "react";
import {IconProps, PlusSquare} from "react-bootstrap-icons";

export const CI_PlusSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PlusSquare {...props}/>
        </>
    );
}
