
"use client";
import React from "react";
import {IconProps, PaletteFill} from "react-bootstrap-icons";

export const CI_PaletteFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PaletteFill {...props}/>
        </>
    );
}
