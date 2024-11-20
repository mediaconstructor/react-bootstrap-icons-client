
"use client";
import React from "react";
import {IconProps, Mailbox} from "react-bootstrap-icons";

export const CI_Mailbox : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Mailbox {...props}/>
        </>
    );
}
