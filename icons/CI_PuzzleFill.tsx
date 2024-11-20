
"use client";
import React from "react";
import {IconProps, PuzzleFill} from "react-bootstrap-icons";

export const CI_PuzzleFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PuzzleFill {...props}/>
        </>
    );
}
