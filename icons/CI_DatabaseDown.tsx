
"use client";
import React from "react";
import {IconProps, DatabaseDown} from "react-bootstrap-icons";

export const CI_DatabaseDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseDown {...props}/>
        </>
    );
}
