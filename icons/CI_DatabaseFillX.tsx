
"use client";
import React from "react";
import {IconProps, DatabaseFillX} from "react-bootstrap-icons";

export const CI_DatabaseFillX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseFillX {...props}/>
        </>
    );
}
