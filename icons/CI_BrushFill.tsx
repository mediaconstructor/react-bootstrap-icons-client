
"use client";
import React from "react";
import {IconProps, BrushFill} from "react-bootstrap-icons";

export const CI_BrushFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BrushFill {...props}/>
        </>
    );
}
