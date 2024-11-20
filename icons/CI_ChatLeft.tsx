
"use client";
import React from "react";
import {IconProps, ChatLeft} from "react-bootstrap-icons";

export const CI_ChatLeft : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatLeft {...props}/>
        </>
    );
}
