
"use client";
import React from "react";
import {IconProps, PlayCircle} from "react-bootstrap-icons";

export const CI_PlayCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PlayCircle {...props}/>
        </>
    );
}
