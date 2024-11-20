
"use client";
import React from "react";
import {IconProps, Whatsapp} from "react-bootstrap-icons";

export const CI_Whatsapp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Whatsapp {...props}/>
        </>
    );
}
