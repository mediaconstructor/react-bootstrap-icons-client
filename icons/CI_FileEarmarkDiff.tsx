
"use client";
import React from "react";
import {IconProps, FileEarmarkDiff} from "react-bootstrap-icons";

export const CI_FileEarmarkDiff : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkDiff {...props}/>
        </>
    );
}
