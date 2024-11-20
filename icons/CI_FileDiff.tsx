
"use client";
import React from "react";
import {IconProps, FileDiff} from "react-bootstrap-icons";

export const CI_FileDiff : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileDiff {...props}/>
        </>
    );
}
