
"use client";
import React from "react";
import {IconProps, EmojiKiss} from "react-bootstrap-icons";

export const CI_EmojiKiss : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiKiss {...props}/>
        </>
    );
}
