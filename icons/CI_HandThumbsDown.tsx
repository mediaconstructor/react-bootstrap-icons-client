
"use client";
import React from "react";
import {IconProps, HandThumbsDown} from "react-bootstrap-icons";

export const CI_HandThumbsDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HandThumbsDown {...props}/>
        </>
    );
}
