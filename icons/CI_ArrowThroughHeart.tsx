
"use client";
import React from "react";
import {IconProps, ArrowThroughHeart} from "react-bootstrap-icons";

export const CI_ArrowThroughHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ArrowThroughHeart {...props}/>
        </>
    );
}
