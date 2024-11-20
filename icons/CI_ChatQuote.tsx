
"use client";
import React from "react";
import {IconProps, ChatQuote} from "react-bootstrap-icons";

export const CI_ChatQuote : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatQuote {...props}/>
        </>
    );
}
