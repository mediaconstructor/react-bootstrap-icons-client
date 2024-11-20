
"use client";
import React from "react";
import {IconProps, MusicNoteList} from "react-bootstrap-icons";

export const CI_MusicNoteList : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MusicNoteList {...props}/>
        </>
    );
}
