
"use client";
import React from "react";
import {IconProps, JournalText} from "react-bootstrap-icons";

export const CI_JournalText : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <JournalText {...props}/>
        </>
    );
}
