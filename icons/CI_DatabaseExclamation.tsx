
"use client";
import React from "react";
import {IconProps, DatabaseExclamation} from "react-bootstrap-icons";

export const CI_DatabaseExclamation : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseExclamation {...props}/>
        </>
    );
}
