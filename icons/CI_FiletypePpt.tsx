
"use client";
import React from "react";
import {IconProps, FiletypePpt} from "react-bootstrap-icons";

export const CI_FiletypePpt : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypePpt {...props}/>
        </>
    );
}
