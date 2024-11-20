
"use client";
import React from "react";
import {IconProps, PassportFill} from "react-bootstrap-icons";

export const CI_PassportFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PassportFill {...props}/>
        </>
    );
}
