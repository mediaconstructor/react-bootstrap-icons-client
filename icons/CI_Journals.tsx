
"use client";
import React from "react";
import {IconProps, Journals} from "react-bootstrap-icons";

export const CI_Journals : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Journals {...props}/>
        </>
    );
}
