
"use client";
import React from "react";
import {IconProps, Indent} from "react-bootstrap-icons";

export const CI_Indent : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Indent {...props}/>
        </>
    );
}
