
"use client";
import React from "react";
import {IconProps, ChatSquareHeart} from "react-bootstrap-icons";

export const CI_ChatSquareHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatSquareHeart {...props}/>
        </>
    );
}
