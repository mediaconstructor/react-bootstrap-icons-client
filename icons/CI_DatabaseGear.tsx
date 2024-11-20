
"use client";
import React from "react";
import {IconProps, DatabaseGear} from "react-bootstrap-icons";

export const CI_DatabaseGear : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseGear {...props}/>
        </>
    );
}
