
"use client";
import React from "react";
import {IconProps, ChatQuoteFill} from "react-bootstrap-icons";

export const CI_ChatQuoteFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatQuoteFill {...props}/>
        </>
    );
}
