
"use client";
import React from "react";
import {IconProps, JournalMedical} from "react-bootstrap-icons";

export const CI_JournalMedical : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <JournalMedical {...props}/>
        </>
    );
}
