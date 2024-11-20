
"use client";
import React from "react";
import {IconProps, PersonFillLock} from "react-bootstrap-icons";

export const CI_PersonFillLock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonFillLock {...props}/>
        </>
    );
}
