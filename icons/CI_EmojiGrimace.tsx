
"use client";
import React from "react";
import {IconProps, EmojiGrimace} from "react-bootstrap-icons";

export const CI_EmojiGrimace : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiGrimace {...props}/>
        </>
    );
}
