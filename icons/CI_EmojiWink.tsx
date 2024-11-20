
"use client";
import React from "react";
import {IconProps, EmojiWink} from "react-bootstrap-icons";

export const CI_EmojiWink : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiWink {...props}/>
        </>
    );
}
