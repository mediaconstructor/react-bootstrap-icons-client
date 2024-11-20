
"use client";
import React from "react";
import {IconProps, MouseFill} from "react-bootstrap-icons";

export const CI_MouseFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MouseFill {...props}/>
        </>
    );
}
