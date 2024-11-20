
"use client";
import React from "react";
import {IconProps, FiletypeGif} from "react-bootstrap-icons";

export const CI_FiletypeGif : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypeGif {...props}/>
        </>
    );
}
