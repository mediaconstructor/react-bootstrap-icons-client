
"use client";
import React from "react";
import {IconProps, FiletypeRb} from "react-bootstrap-icons";

export const CI_FiletypeRb : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypeRb {...props}/>
        </>
    );
}
