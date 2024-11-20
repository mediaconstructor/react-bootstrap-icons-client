
"use client";
import React from "react";
import {IconProps, Voicemail} from "react-bootstrap-icons";

export const CI_Voicemail : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Voicemail {...props}/>
        </>
    );
}
