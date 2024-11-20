
"use client";
import React from "react";
import {IconProps, Dice5} from "react-bootstrap-icons";

export const CI_Dice5 : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Dice5 {...props}/>
        </>
    );
}
