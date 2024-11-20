
"use client";
import React from "react";
import {IconProps, FiletypeSvg} from "react-bootstrap-icons";

export const CI_FiletypeSvg : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypeSvg {...props}/>
        </>
    );
}
