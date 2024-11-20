
"use client";
import React from "react";
import {IconProps, ChatFill} from "react-bootstrap-icons";

export const CI_ChatFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatFill {...props}/>
        </>
    );
}
