
"use client";
import React from "react";
import {IconProps, FileFont} from "react-bootstrap-icons";

export const CI_FileFont : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileFont {...props}/>
        </>
    );
}
