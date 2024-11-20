
"use client";
import React from "react";
import {IconProps, Layers} from "react-bootstrap-icons";

export const CI_Layers : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Layers {...props}/>
        </>
    );
}
