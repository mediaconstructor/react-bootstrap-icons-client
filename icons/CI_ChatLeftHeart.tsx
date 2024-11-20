
"use client";
import React from "react";
import {IconProps, ChatLeftHeart} from "react-bootstrap-icons";

export const CI_ChatLeftHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatLeftHeart {...props}/>
        </>
    );
}
