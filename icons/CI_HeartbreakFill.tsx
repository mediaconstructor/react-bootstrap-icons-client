
"use client";
import React from "react";
import {IconProps, HeartbreakFill} from "react-bootstrap-icons";

export const CI_HeartbreakFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HeartbreakFill {...props}/>
        </>
    );
}
