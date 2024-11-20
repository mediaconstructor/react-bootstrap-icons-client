
"use client";
import React from "react";
import {IconProps, PostcardHeart} from "react-bootstrap-icons";

export const CI_PostcardHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PostcardHeart {...props}/>
        </>
    );
}
