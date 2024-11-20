
"use client";
import React from "react";
import {IconProps, UniversalAccess} from "react-bootstrap-icons";

export const CI_UniversalAccess : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UniversalAccess {...props}/>
        </>
    );
}
