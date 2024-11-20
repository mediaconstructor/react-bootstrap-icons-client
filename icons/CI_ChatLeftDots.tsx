
"use client";
import React from "react";
import {IconProps, ChatLeftDots} from "react-bootstrap-icons";

export const CI_ChatLeftDots : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatLeftDots {...props}/>
        </>
    );
}
