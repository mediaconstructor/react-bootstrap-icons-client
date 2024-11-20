
"use client";
import React from "react";
import {IconProps, FileEarmarkCheck} from "react-bootstrap-icons";

export const CI_FileEarmarkCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkCheck {...props}/>
        </>
    );
}
