
"use client";
import React from "react";
import {IconProps, FiletypeTxt} from "react-bootstrap-icons";

export const CI_FiletypeTxt : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypeTxt {...props}/>
        </>
    );
}
