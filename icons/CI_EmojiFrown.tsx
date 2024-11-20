
"use client";
import React from "react";
import {IconProps, EmojiFrown} from "react-bootstrap-icons";

export const CI_EmojiFrown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiFrown {...props}/>
        </>
    );
}
