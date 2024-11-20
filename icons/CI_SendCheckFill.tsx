
"use client";
import React from "react";
import {IconProps, SendCheckFill} from "react-bootstrap-icons";

export const CI_SendCheckFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendCheckFill {...props}/>
        </>
    );
}
