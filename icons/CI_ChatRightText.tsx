
"use client";
import React from "react";
import {IconProps, ChatRightText} from "react-bootstrap-icons";

export const CI_ChatRightText : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatRightText {...props}/>
        </>
    );
}
