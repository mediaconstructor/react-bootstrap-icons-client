
"use client";
import React from "react";
import {IconProps, Inboxes} from "react-bootstrap-icons";

export const CI_Inboxes : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Inboxes {...props}/>
        </>
    );
}
