
"use client";
import React from "react";
import {IconProps, InboxFill} from "react-bootstrap-icons";

export const CI_InboxFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <InboxFill {...props}/>
        </>
    );
}
