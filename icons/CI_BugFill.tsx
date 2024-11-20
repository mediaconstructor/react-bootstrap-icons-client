
"use client";
import React from "react";
import {IconProps, BugFill} from "react-bootstrap-icons";

export const CI_BugFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BugFill {...props}/>
        </>
    );
}
