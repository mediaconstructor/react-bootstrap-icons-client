
"use client";
import React from "react";
import {IconProps, DatabaseFillAdd} from "react-bootstrap-icons";

export const CI_DatabaseFillAdd : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseFillAdd {...props}/>
        </>
    );
}
