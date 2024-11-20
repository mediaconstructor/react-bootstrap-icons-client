
"use client";
import React from "react";
import {IconProps, FileMusic} from "react-bootstrap-icons";

export const CI_FileMusic : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileMusic {...props}/>
        </>
    );
}
