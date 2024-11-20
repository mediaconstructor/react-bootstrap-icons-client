
"use client";
import React from "react";
import {IconProps, SendPlusFill} from "react-bootstrap-icons";

export const CI_SendPlusFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendPlusFill {...props}/>
        </>
    );
}
