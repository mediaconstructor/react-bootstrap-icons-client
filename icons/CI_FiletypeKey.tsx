
"use client";
import React from "react";
import {IconProps, FiletypeKey} from "react-bootstrap-icons";

export const CI_FiletypeKey : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypeKey {...props}/>
        </>
    );
}
