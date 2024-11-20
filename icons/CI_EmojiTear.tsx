
"use client";
import React from "react";
import {IconProps, EmojiTear} from "react-bootstrap-icons";

export const CI_EmojiTear : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiTear {...props}/>
        </>
    );
}
