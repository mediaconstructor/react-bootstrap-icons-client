
"use client";
import React from "react";
import {IconProps, JournalCheck} from "react-bootstrap-icons";

export const CI_JournalCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <JournalCheck {...props}/>
        </>
    );
}
