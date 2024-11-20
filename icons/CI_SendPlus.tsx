
"use client";
import React from "react";
import {IconProps, SendPlus} from "react-bootstrap-icons";

export const CI_SendPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendPlus {...props}/>
        </>
    );
}
