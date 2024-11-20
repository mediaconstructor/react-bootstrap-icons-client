
"use client";
import React from "react";
import {IconProps, DatabaseFillCheck} from "react-bootstrap-icons";

export const CI_DatabaseFillCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseFillCheck {...props}/>
        </>
    );
}
