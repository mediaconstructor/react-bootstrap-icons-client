
"use client";
import React from "react";
import {IconProps, PauseBtn} from "react-bootstrap-icons";

export const CI_PauseBtn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PauseBtn {...props}/>
        </>
    );
}
