
"use client";
import React from "react";
import {IconProps, Dropbox} from "react-bootstrap-icons";

export const CI_Dropbox : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Dropbox {...props}/>
        </>
    );
}
