
"use client";
import React from "react";
import {IconProps, HeartArrow} from "react-bootstrap-icons";

export const CI_HeartArrow : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HeartArrow {...props}/>
        </>
    );
}
