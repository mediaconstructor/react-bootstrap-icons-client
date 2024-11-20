
"use client";
import React from "react";
import {IconProps, DatabaseFill} from "react-bootstrap-icons";

export const CI_DatabaseFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseFill {...props}/>
        </>
    );
}
