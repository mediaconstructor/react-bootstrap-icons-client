
"use client";
import React from "react";
import {IconProps, JournalBookmark} from "react-bootstrap-icons";

export const CI_JournalBookmark : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <JournalBookmark {...props}/>
        </>
    );
}
