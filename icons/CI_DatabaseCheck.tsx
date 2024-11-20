
"use client";
import React from "react";
import {IconProps, DatabaseCheck} from "react-bootstrap-icons";

export const CI_DatabaseCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseCheck {...props}/>
        </>
    );
}
