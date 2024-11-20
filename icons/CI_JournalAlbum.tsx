
"use client";
import React from "react";
import {IconProps, JournalAlbum} from "react-bootstrap-icons";

export const CI_JournalAlbum : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <JournalAlbum {...props}/>
        </>
    );
}
