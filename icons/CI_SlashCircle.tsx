
"use client";
import React from "react";
import {IconProps, SlashCircle} from "react-bootstrap-icons";

export const CI_SlashCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SlashCircle {...props}/>
        </>
    );
}
