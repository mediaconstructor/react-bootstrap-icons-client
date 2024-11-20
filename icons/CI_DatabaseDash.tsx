
"use client";
import React from "react";
import {IconProps, DatabaseDash} from "react-bootstrap-icons";

export const CI_DatabaseDash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseDash {...props}/>
        </>
    );
}
