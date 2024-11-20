
"use client";
import React from "react";
import {IconProps, Dice6} from "react-bootstrap-icons";

export const CI_Dice6 : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Dice6 {...props}/>
        </>
    );
}
