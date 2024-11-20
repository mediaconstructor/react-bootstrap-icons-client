
"use client";
import React from "react";
import {IconProps, Backpack} from "react-bootstrap-icons";

export const CI_Backpack : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Backpack {...props}/>
        </>
    );
}
