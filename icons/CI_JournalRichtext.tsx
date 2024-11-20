
"use client";
import React from "react";
import {IconProps, JournalRichtext} from "react-bootstrap-icons";

export const CI_JournalRichtext : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <JournalRichtext {...props}/>
        </>
    );
}
