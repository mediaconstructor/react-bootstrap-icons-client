
"use client";
import React from "react";
import {IconProps, Bandaid} from "react-bootstrap-icons";

export const CI_Bandaid : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bandaid {...props}/>
        </>
    );
}
