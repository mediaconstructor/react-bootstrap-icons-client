
"use client";
import React from "react";
import {IconProps, PassFill} from "react-bootstrap-icons";

export const CI_PassFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PassFill {...props}/>
        </>
    );
}
