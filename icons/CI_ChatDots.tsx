
"use client";
import React from "react";
import {IconProps, ChatDots} from "react-bootstrap-icons";

export const CI_ChatDots : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatDots {...props}/>
        </>
    );
}
