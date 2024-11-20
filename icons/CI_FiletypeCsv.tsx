
"use client";
import React from "react";
import {IconProps, FiletypeCsv} from "react-bootstrap-icons";

export const CI_FiletypeCsv : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypeCsv {...props}/>
        </>
    );
}
