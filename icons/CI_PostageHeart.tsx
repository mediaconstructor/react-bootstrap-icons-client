
"use client";
import React from "react";
import {IconProps, PostageHeart} from "react-bootstrap-icons";

export const CI_PostageHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PostageHeart {...props}/>
        </>
    );
}
