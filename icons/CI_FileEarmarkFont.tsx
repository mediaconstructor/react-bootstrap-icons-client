
"use client";
import React from "react";
import {IconProps, FileEarmarkFont} from "react-bootstrap-icons";

export const CI_FileEarmarkFont : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkFont {...props}/>
        </>
    );
}
