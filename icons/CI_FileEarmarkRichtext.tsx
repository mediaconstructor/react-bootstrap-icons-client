
"use client";
import React from "react";
import {IconProps, FileEarmarkRichtext} from "react-bootstrap-icons";

export const CI_FileEarmarkRichtext : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkRichtext {...props}/>
        </>
    );
}
