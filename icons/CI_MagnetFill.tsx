
"use client";
import React from "react";
import {IconProps, MagnetFill} from "react-bootstrap-icons";

export const CI_MagnetFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MagnetFill {...props}/>
        </>
    );
}
