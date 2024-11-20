
"use client";
import React from "react";
import {IconProps, Folder} from "react-bootstrap-icons";

export const CI_Folder : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Folder {...props}/>
        </>
    );
}
