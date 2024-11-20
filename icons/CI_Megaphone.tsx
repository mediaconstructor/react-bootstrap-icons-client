
"use client";
import React from "react";
import {IconProps, Megaphone} from "react-bootstrap-icons";

export const CI_Megaphone : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Megaphone {...props}/>
        </>
    );
}
