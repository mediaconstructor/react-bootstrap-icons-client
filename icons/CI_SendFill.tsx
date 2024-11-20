
"use client";
import React from "react";
import {IconProps, SendFill} from "react-bootstrap-icons";

export const CI_SendFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendFill {...props}/>
        </>
    );
}
