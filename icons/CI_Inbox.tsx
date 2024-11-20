
"use client";
import React from "react";
import {IconProps, Inbox} from "react-bootstrap-icons";

export const CI_Inbox : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Inbox {...props}/>
        </>
    );
}
