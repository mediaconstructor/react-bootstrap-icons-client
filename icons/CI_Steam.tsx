
"use client";
import React from "react";
import {IconProps, Steam} from "react-bootstrap-icons";

export const CI_Steam : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Steam {...props}/>
        </>
    );
}
