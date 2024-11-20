
"use client";
import React from "react";
import {IconProps, Lamp} from "react-bootstrap-icons";

export const CI_Lamp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Lamp {...props}/>
        </>
    );
}
