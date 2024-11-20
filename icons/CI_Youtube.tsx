
"use client";
import React from "react";
import {IconProps, Youtube} from "react-bootstrap-icons";

export const CI_Youtube : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Youtube {...props}/>
        </>
    );
}
