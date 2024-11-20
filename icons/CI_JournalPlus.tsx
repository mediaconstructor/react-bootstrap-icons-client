
"use client";
import React from "react";
import {IconProps, JournalPlus} from "react-bootstrap-icons";

export const CI_JournalPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <JournalPlus {...props}/>
        </>
    );
}
