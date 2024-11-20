
"use client";
import React from "react";
import {IconProps, MailboxFlag} from "react-bootstrap-icons";

export const CI_MailboxFlag : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MailboxFlag {...props}/>
        </>
    );
}
