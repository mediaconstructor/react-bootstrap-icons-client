
"use client";
import React from "react";
import {IconProps, JournalCode} from "react-bootstrap-icons";

export const CI_JournalCode : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <JournalCode {...props}/>
        </>
    );
}
