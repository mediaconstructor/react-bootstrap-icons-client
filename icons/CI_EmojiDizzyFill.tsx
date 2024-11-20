
"use client";
import React from "react";
import {IconProps, EmojiDizzyFill} from "react-bootstrap-icons";

export const CI_EmojiDizzyFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiDizzyFill {...props}/>
        </>
    );
}
