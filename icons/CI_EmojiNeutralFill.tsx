
"use client";
import React from "react";
import {IconProps, EmojiNeutralFill} from "react-bootstrap-icons";

export const CI_EmojiNeutralFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiNeutralFill {...props}/>
        </>
    );
}
