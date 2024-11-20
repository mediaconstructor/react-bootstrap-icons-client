
"use client";
import React from "react";
import {IconProps, DatabaseAdd} from "react-bootstrap-icons";

export const CI_DatabaseAdd : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseAdd {...props}/>
        </>
    );
}
