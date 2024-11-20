
"use client";
import React from "react";
import {IconProps, FiletypeDoc} from "react-bootstrap-icons";

export const CI_FiletypeDoc : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypeDoc {...props}/>
        </>
    );
}
