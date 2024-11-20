
"use client";
import React from "react";
import {IconProps, EmojiSurpriseFill} from "react-bootstrap-icons";

export const CI_EmojiSurpriseFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiSurpriseFill {...props}/>
        </>
    );
}
