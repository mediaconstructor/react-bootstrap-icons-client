
"use client";
import React from "react";
import {IconProps, Minecart} from "react-bootstrap-icons";

export const CI_Minecart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Minecart {...props}/>
        </>
    );
}
