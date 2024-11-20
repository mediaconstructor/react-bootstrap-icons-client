
"use client";
import React from "react";
import {IconProps, DatabaseFillUp} from "react-bootstrap-icons";

export const CI_DatabaseFillUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseFillUp {...props}/>
        </>
    );
}
