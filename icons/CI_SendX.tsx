
"use client";
import React from "react";
import {IconProps, SendX} from "react-bootstrap-icons";

export const CI_SendX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendX {...props}/>
        </>
    );
}
