
"use client";
import React from "react";
import {IconProps, JournalMinus} from "react-bootstrap-icons";

export const CI_JournalMinus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <JournalMinus {...props}/>
        </>
    );
}
