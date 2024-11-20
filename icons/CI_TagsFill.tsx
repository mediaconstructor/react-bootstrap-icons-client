
"use client";
import React from "react";
import {IconProps, TagsFill} from "react-bootstrap-icons";

export const CI_TagsFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TagsFill {...props}/>
        </>
    );
}
