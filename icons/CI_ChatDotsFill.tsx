
"use client";
import React from "react";
import {IconProps, ChatDotsFill} from "react-bootstrap-icons";

export const CI_ChatDotsFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChatDotsFill {...props}/>
        </>
    );
}
