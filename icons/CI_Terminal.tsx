
"use client";
import React from "react";
import {IconProps, Terminal} from "react-bootstrap-icons";

export const CI_Terminal : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Terminal {...props}/>
        </>
    );
}
