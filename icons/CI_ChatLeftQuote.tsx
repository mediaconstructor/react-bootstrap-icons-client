
"use client";
import React from "react";
import {IconProps, ChatLeftQuote} from "react-bootstrap-icons";

export const CI_ChatLeftQuote : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatLeftQuote {...props}/>
        </>
    );
}
