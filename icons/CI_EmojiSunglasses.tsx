
"use client";
import React from "react";
import {IconProps, EmojiSunglasses} from "react-bootstrap-icons";

export const CI_EmojiSunglasses : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiSunglasses {...props}/>
        </>
    );
}
