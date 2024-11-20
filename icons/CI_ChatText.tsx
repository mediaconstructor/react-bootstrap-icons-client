
"use client";
import React from "react";
import {IconProps, ChatText} from "react-bootstrap-icons";

export const CI_ChatText : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatText {...props}/>
        </>
    );
}
