
"use client";
import React from "react";
import {IconProps, EmojiSmileFill} from "react-bootstrap-icons";

export const CI_EmojiSmileFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiSmileFill {...props}/>
        </>
    );
}
