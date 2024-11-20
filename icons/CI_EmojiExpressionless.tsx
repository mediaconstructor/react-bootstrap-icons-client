
"use client";
import React from "react";
import {IconProps, EmojiExpressionless} from "react-bootstrap-icons";

export const CI_EmojiExpressionless : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiExpressionless {...props}/>
        </>
    );
}
