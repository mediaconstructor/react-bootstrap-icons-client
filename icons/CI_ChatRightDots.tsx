
"use client";
import React from "react";
import {IconProps, ChatRightDots} from "react-bootstrap-icons";

export const CI_ChatRightDots : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatRightDots {...props}/>
        </>
    );
}
