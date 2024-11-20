
"use client";
import React from "react";
import {IconProps, ChatSquare} from "react-bootstrap-icons";

export const CI_ChatSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatSquare {...props}/>
        </>
    );
}
