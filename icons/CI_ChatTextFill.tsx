
"use client";
import React from "react";
import {IconProps, ChatTextFill} from "react-bootstrap-icons";

export const CI_ChatTextFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatTextFill {...props}/>
        </>
    );
}
