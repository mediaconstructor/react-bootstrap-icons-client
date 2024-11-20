
"use client";
import React from "react";
import {IconProps, SendArrowUp} from "react-bootstrap-icons";

export const CI_SendArrowUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendArrowUp {...props}/>
        </>
    );
}
