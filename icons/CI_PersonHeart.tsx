
"use client";
import React from "react";
import {IconProps, PersonHeart} from "react-bootstrap-icons";

export const CI_PersonHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonHeart {...props}/>
        </>
    );
}
