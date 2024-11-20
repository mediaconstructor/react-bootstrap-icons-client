
"use client";
import React from "react";
import {IconProps, PersonLock} from "react-bootstrap-icons";

export const CI_PersonLock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonLock {...props}/>
        </>
    );
}
