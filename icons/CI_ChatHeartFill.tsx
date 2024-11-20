
"use client";
import React from "react";
import {IconProps, ChatHeartFill} from "react-bootstrap-icons";

export const CI_ChatHeartFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatHeartFill {...props}/>
        </>
    );
}
