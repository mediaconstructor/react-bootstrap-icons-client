
"use client";
import React from "react";
import {IconProps, BusFront} from "react-bootstrap-icons";

export const CI_BusFront : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BusFront {...props}/>
        </>
    );
}
