
"use client";
import React from "react";
import {IconProps, FilePerson} from "react-bootstrap-icons";

export const CI_FilePerson : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilePerson {...props}/>
        </>
    );
}
