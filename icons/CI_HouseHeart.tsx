
"use client";
import React from "react";
import {IconProps, HouseHeart} from "react-bootstrap-icons";

export const CI_HouseHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HouseHeart {...props}/>
        </>
    );
}
