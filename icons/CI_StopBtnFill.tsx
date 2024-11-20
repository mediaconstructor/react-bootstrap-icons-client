
"use client";
import React from "react";
import {IconProps, StopBtnFill} from "react-bootstrap-icons";

export const CI_StopBtnFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <StopBtnFill {...props}/>
        </>
    );
}
