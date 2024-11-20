
"use client";
import React from "react";
import {IconProps, SpeakerFill} from "react-bootstrap-icons";

export const CI_SpeakerFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SpeakerFill {...props}/>
        </>
    );
}
