
"use client";
import React from "react";
import {IconProps, FileEarmarkSlides} from "react-bootstrap-icons";

export const CI_FileEarmarkSlides : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkSlides {...props}/>
        </>
    );
}
