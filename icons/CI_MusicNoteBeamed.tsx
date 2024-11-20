
"use client";
import React from "react";
import {IconProps, MusicNoteBeamed} from "react-bootstrap-icons";

export const CI_MusicNoteBeamed : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MusicNoteBeamed {...props}/>
        </>
    );
}
