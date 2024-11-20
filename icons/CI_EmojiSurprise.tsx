
"use client";
import React from "react";
import {IconProps, EmojiSurprise} from "react-bootstrap-icons";

export const CI_EmojiSurprise : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiSurprise {...props}/>
        </>
    );
}
