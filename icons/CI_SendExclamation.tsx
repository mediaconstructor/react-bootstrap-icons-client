
"use client";
import React from "react";
import {IconProps, SendExclamation} from "react-bootstrap-icons";

export const CI_SendExclamation : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendExclamation {...props}/>
        </>
    );
}
