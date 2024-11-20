
"use client";
import React from "react";
import {IconProps, FlagFill} from "react-bootstrap-icons";

export const CI_FlagFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FlagFill {...props}/>
        </>
    );
}
