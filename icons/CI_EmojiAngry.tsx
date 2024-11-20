
"use client";
import React from "react";
import {IconProps, EmojiAngry} from "react-bootstrap-icons";

export const CI_EmojiAngry : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiAngry {...props}/>
        </>
    );
}
