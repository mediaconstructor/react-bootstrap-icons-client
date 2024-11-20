
"use client";
import React from "react";
import {IconProps, Window} from "react-bootstrap-icons";

export const CI_Window : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Window {...props}/>
        </>
    );
}
