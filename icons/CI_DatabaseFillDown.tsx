
"use client";
import React from "react";
import {IconProps, DatabaseFillDown} from "react-bootstrap-icons";

export const CI_DatabaseFillDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseFillDown {...props}/>
        </>
    );
}
