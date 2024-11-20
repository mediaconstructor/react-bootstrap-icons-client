
"use client";
import React from "react";
import {IconProps, Record} from "react-bootstrap-icons";

export const CI_Record : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Record {...props}/>
        </>
    );
}
