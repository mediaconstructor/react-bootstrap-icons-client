
"use client";
import React from "react";
import {IconProps, TerminalSplit} from "react-bootstrap-icons";

export const CI_TerminalSplit : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TerminalSplit {...props}/>
        </>
    );
}
