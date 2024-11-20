
"use client";
import React from "react";
import {IconProps, GenderNeuter} from "react-bootstrap-icons";

export const CI_GenderNeuter : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GenderNeuter {...props}/>
        </>
    );
}
