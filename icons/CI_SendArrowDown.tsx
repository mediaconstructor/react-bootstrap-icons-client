
"use client";
import React from "react";
import {IconProps, SendArrowDown} from "react-bootstrap-icons";

export const CI_SendArrowDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendArrowDown {...props}/>
        </>
    );
}
