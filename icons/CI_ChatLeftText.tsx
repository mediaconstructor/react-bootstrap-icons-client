
"use client";
import React from "react";
import {IconProps, ChatLeftText} from "react-bootstrap-icons";

export const CI_ChatLeftText : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatLeftText {...props}/>
        </>
    );
}
