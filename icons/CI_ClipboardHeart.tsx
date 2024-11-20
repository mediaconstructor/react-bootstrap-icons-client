
"use client";
import React from "react";
import {IconProps, ClipboardHeart} from "react-bootstrap-icons";

export const CI_ClipboardHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ClipboardHeart {...props}/>
        </>
    );
}
