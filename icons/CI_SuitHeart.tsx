
"use client";
import React from "react";
import {IconProps, SuitHeart} from "react-bootstrap-icons";

export const CI_SuitHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SuitHeart {...props}/>
        </>
    );
}
