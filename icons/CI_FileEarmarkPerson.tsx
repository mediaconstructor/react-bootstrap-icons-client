
"use client";
import React from "react";
import {IconProps, FileEarmarkPerson} from "react-bootstrap-icons";

export const CI_FileEarmarkPerson : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkPerson {...props}/>
        </>
    );
}
