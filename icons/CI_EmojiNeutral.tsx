
"use client";
import React from "react";
import {IconProps, EmojiNeutral} from "react-bootstrap-icons";

export const CI_EmojiNeutral : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiNeutral {...props}/>
        </>
    );
}
