
"use client";
import React from "react";
import {IconProps, Tag} from "react-bootstrap-icons";

export const CI_Tag : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Tag {...props}/>
        </>
    );
}
