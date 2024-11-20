
"use client";
import React from "react";
import {IconProps, ChatRightHeart} from "react-bootstrap-icons";

export const CI_ChatRightHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatRightHeart {...props}/>
        </>
    );
}
