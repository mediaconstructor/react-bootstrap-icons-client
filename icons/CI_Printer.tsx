
"use client";
import React from "react";
import {IconProps, Printer} from "react-bootstrap-icons";

export const CI_Printer : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Printer {...props}/>
        </>
    );
}
