
"use client";
import React from "react";
import {IconProps, PostcardFill} from "react-bootstrap-icons";

export const CI_PostcardFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PostcardFill {...props}/>
        </>
    );
}
