
"use client";
import React from "react";
import {IconProps, PostageFill} from "react-bootstrap-icons";

export const CI_PostageFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PostageFill {...props}/>
        </>
    );
}
