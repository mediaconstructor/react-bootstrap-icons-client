
"use client";
import React from "react";
import {IconProps, ChatRight} from "react-bootstrap-icons";

export const CI_ChatRight : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatRight {...props}/>
        </>
    );
}
