
"use client";
import React from "react";
import {IconProps, FileEarmarkMinus} from "react-bootstrap-icons";

export const CI_FileEarmarkMinus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkMinus {...props}/>
        </>
    );
}
