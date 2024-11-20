
"use client";
import React from "react";
import {IconProps, DatabaseFillGear} from "react-bootstrap-icons";

export const CI_DatabaseFillGear : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseFillGear {...props}/>
        </>
    );
}
