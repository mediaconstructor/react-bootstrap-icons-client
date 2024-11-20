
"use client";
import React from "react";
import {IconProps, EmojiGrin} from "react-bootstrap-icons";

export const CI_EmojiGrin : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiGrin {...props}/>
        </>
    );
}
