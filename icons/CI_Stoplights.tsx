
"use client";
import React from "react";
import {IconProps, Stoplights} from "react-bootstrap-icons";

export const CI_Stoplights : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Stoplights {...props}/>
        </>
    );
}
