
"use client";
import React from "react";
import {IconProps, ChatRightQuote} from "react-bootstrap-icons";

export const CI_ChatRightQuote : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatRightQuote {...props}/>
        </>
    );
}
