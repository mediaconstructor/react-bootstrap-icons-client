
"use client";
import React from "react";
import {IconProps, PlusSlashMinus} from "react-bootstrap-icons";

export const CI_PlusSlashMinus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PlusSlashMinus {...props}/>
        </>
    );
}
