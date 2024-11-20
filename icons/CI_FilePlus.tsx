
"use client";
import React from "react";
import {IconProps, FilePlus} from "react-bootstrap-icons";

export const CI_FilePlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilePlus {...props}/>
        </>
    );
}
