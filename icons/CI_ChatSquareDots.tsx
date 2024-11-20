
"use client";
import React from "react";
import {IconProps, ChatSquareDots} from "react-bootstrap-icons";

export const CI_ChatSquareDots : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatSquareDots {...props}/>
        </>
    );
}
