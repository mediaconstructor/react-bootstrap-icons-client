
"use client";
import React from "react";
import {IconProps, SlashSquare} from "react-bootstrap-icons";

export const CI_SlashSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SlashSquare {...props}/>
        </>
    );
}
