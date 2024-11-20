
"use client";
import React from "react";
import {IconProps, FiletypePy} from "react-bootstrap-icons";

export const CI_FiletypePy : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypePy {...props}/>
        </>
    );
}
