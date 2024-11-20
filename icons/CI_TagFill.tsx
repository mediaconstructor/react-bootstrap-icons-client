
"use client";
import React from "react";
import {IconProps, TagFill} from "react-bootstrap-icons";

export const CI_TagFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TagFill {...props}/>
        </>
    );
}
