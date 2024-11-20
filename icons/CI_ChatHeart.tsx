
"use client";
import React from "react";
import {IconProps, ChatHeart} from "react-bootstrap-icons";

export const CI_ChatHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatHeart {...props}/>
        </>
    );
}
