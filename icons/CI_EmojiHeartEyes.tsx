
"use client";
import React from "react";
import {IconProps, EmojiHeartEyes} from "react-bootstrap-icons";

export const CI_EmojiHeartEyes : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiHeartEyes {...props}/>
        </>
    );
}
