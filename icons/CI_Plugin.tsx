
"use client";
import React from "react";
import {IconProps, Plugin} from "react-bootstrap-icons";

export const CI_Plugin : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Plugin {...props}/>
        </>
    );
}
