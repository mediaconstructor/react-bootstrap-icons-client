
"use client";
import React from "react";
import {IconProps, EnvelopePaperHeart} from "react-bootstrap-icons";

export const CI_EnvelopePaperHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopePaperHeart {...props}/>
        </>
    );
}
