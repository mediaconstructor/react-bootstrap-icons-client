
"use client";
import React from "react";
import {IconProps, PauseBtnFill} from "react-bootstrap-icons";

export const CI_PauseBtnFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PauseBtnFill {...props}/>
        </>
    );
}
