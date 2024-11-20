
"use client";
import React from "react";
import {IconProps, Dice3} from "react-bootstrap-icons";

export const CI_Dice3 : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Dice3 {...props}/>
        </>
    );
}
