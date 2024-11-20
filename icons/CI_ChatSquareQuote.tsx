
"use client";
import React from "react";
import {IconProps, ChatSquareQuote} from "react-bootstrap-icons";

export const CI_ChatSquareQuote : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatSquareQuote {...props}/>
        </>
    );
}
