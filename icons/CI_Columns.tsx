
"use client";
import React from "react";
import {IconProps, Columns} from "react-bootstrap-icons";

export const CI_Columns : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Columns {...props}/>
        </>
    );
}
