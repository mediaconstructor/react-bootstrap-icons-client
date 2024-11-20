
"use client";
import React from "react";
import {IconProps, DatabaseFillLock} from "react-bootstrap-icons";

export const CI_DatabaseFillLock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseFillLock {...props}/>
        </>
    );
}
