
"use client";
import React from "react";
import {IconProps, EmojiDizzy} from "react-bootstrap-icons";

export const CI_EmojiDizzy : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiDizzy {...props}/>
        </>
    );
}
