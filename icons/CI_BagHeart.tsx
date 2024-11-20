
"use client";
import React from "react";
import {IconProps, BagHeart} from "react-bootstrap-icons";

export const CI_BagHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BagHeart {...props}/>
        </>
    );
}
