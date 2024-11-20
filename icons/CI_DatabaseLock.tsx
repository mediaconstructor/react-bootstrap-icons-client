
"use client";
import React from "react";
import {IconProps, DatabaseLock} from "react-bootstrap-icons";

export const CI_DatabaseLock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseLock {...props}/>
        </>
    );
}
