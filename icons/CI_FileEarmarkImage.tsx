
"use client";
import React from "react";
import {IconProps, FileEarmarkImage} from "react-bootstrap-icons";

export const CI_FileEarmarkImage : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkImage {...props}/>
        </>
    );
}
