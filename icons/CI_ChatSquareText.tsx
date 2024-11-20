
"use client";
import React from "react";
import {IconProps, ChatSquareText} from "react-bootstrap-icons";

export const CI_ChatSquareText : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatSquareText {...props}/>
        </>
    );
}
