
"use client";
import React from "react";
import {IconProps, ShieldPlus} from "react-bootstrap-icons";

export const CI_ShieldPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ShieldPlus {...props}/>
        </>
    );
}
