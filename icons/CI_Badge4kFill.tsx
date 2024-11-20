
"use client";
import React from "react";
import {IconProps, Badge4kFill} from "react-bootstrap-icons";

export const CI_Badge4kFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Badge4kFill {...props}/>
        </>
    );
}
