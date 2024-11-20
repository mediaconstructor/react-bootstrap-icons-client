
"use client";
import React from "react";
import {IconProps, EmojiTearFill} from "react-bootstrap-icons";

export const CI_EmojiTearFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiTearFill {...props}/>
        </>
    );
}
