
"use client";
import React from "react";
import {IconProps, HeartFill} from "react-bootstrap-icons";

export const CI_HeartFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HeartFill {...props}/>
        </>
    );
}
