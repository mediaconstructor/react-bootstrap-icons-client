
"use client";
import React from "react";
import {IconProps, TextParagraph} from "react-bootstrap-icons";

export const CI_TextParagraph : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TextParagraph {...props}/>
        </>
    );
}
