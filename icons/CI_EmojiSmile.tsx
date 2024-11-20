
"use client";
import React from "react";
import {IconProps, EmojiSmile} from "react-bootstrap-icons";

export const CI_EmojiSmile : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiSmile {...props}/>
        </>
    );
}
