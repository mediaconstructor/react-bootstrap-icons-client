
"use client";
import React from "react";
import {IconProps, TerminalPlus} from "react-bootstrap-icons";

export const CI_TerminalPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TerminalPlus {...props}/>
        </>
    );
}
